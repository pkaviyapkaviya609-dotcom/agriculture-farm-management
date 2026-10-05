package com.example.agriculturefarm.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.agriculturefarm.entity.Harvest;

public interface HarvestRepository extends JpaRepository<Harvest, Integer> {

    // Get all harvest details with Farm and Crop information
    @Query(value = """
        SELECT
            h.harvest_id,
            f.farm_name,
            c.crop_name,
            h.quantity,
            h.harvest_date
        FROM harvests h
        JOIN crop_planting cp
            ON h.planting_id = cp.planting_id
        JOIN farms f
            ON cp.farm_id = f.farm_id
        JOIN crops c
            ON cp.crop_id = c.crop_id
        """, nativeQuery = true)
    List<Object[]> getHarvestDetails();


    // Get crops whose harvest quantity is greater than average
    @Query(value = """
        SELECT
            c.crop_name,
            h.quantity
        FROM harvests h
        JOIN crop_planting cp
            ON h.planting_id = cp.planting_id
        JOIN crops c
            ON cp.crop_id = c.crop_id
        WHERE h.quantity > (
            SELECT AVG(quantity)
            FROM harvests
        )
        """, nativeQuery = true)
    List<Object[]> getCropsAboveAverage();


    // Call MySQL stored procedure
    @Modifying
    @Query(value = """
        CALL record_harvest(
            :plantingId,
            :quantity,
            :harvestDate
        )
        """, nativeQuery = true)
    void recordHarvest(
        @Param("plantingId") Integer plantingId,
        @Param("quantity") Double quantity,
        @Param("harvestDate") LocalDate harvestDate
    );


    // Call MySQL function
    @Query(
        value = "SELECT calculate_total_harvest()",
        nativeQuery = true
    )
    Double calculateTotalHarvest();
}
package com.example.agriculturefarm.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.agriculturefarm.entity.Harvest;
import com.example.agriculturefarm.repository.HarvestRepository;

@Service
public class HarvestService {

    private final HarvestRepository harvestRepository;

    public HarvestService(HarvestRepository harvestRepository) {
        this.harvestRepository = harvestRepository;
    }


    // Get all harvests
    public List<Harvest> getAllHarvests() {
        return harvestRepository.findAll();
    }


    // Get harvest by ID
    public Harvest getHarvestById(Integer id) {
        return harvestRepository.findById(id).orElse(null);
    }


    // Normal add harvest
    public Harvest saveHarvest(Harvest harvest) {
        return harvestRepository.save(harvest);
    }


    // Delete harvest
    public void deleteHarvest(Integer id) {
        harvestRepository.deleteById(id);
    }


    // JOIN - Harvest details
    public List<Object[]> getHarvestDetails() {
        return harvestRepository.getHarvestDetails();
    }


    // SUBQUERY - Above average crops
    public List<Object[]> getCropsAboveAverage() {
        return harvestRepository.getCropsAboveAverage();
    }


    // STORED PROCEDURE
    @Transactional
    public void recordHarvest(
            Integer plantingId,
            Double quantity,
            LocalDate harvestDate) {

        harvestRepository.recordHarvest(
            plantingId,
            quantity,
            harvestDate
        );
    }


    // FUNCTION - Total harvest
    public Double calculateTotalHarvest() {
        return harvestRepository.calculateTotalHarvest();
    }
}
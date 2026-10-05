package com.example.agriculturefarm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agriculturefarm.entity.CropPlanting;

public interface CropPlantingRepository extends JpaRepository<CropPlanting, Integer> {
}
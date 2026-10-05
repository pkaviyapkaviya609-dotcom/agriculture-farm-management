package com.example.agriculturefarm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.agriculturefarm.entity.Crop;

public interface CropRepository extends JpaRepository<Crop, Integer> {
}
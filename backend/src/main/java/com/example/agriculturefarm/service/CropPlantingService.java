package com.example.agriculturefarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.agriculturefarm.entity.CropPlanting;
import com.example.agriculturefarm.repository.CropPlantingRepository;

@Service
public class CropPlantingService {

    private final CropPlantingRepository cropPlantingRepository;

    public CropPlantingService(CropPlantingRepository cropPlantingRepository) {
        this.cropPlantingRepository = cropPlantingRepository;
    }

    public List<CropPlanting> getAllPlantings() {
        return cropPlantingRepository.findAll();
    }

    public CropPlanting getPlantingById(Integer id) {
        return cropPlantingRepository.findById(id).orElse(null);
    }

    public CropPlanting savePlanting(CropPlanting planting) {
        return cropPlantingRepository.save(planting);
    }

    public void deletePlanting(Integer id) {
        cropPlantingRepository.deleteById(id);
    }
}
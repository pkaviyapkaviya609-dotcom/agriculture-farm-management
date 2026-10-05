package com.example.agriculturefarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.agriculturefarm.entity.Crop;
import com.example.agriculturefarm.repository.CropRepository;

@Service
public class CropService {

    private final CropRepository cropRepository;

    public CropService(CropRepository cropRepository) {
        this.cropRepository = cropRepository;
    }

    public List<Crop> getAllCrops() {
        return cropRepository.findAll();
    }

    public Crop getCropById(Integer id) {
        return cropRepository.findById(id).orElse(null);
    }

    public Crop saveCrop(Crop crop) {
        return cropRepository.save(crop);
    }

    public void deleteCrop(Integer id) {
        cropRepository.deleteById(id);
    }
}
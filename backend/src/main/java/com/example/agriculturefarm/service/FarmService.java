package com.example.agriculturefarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.agriculturefarm.entity.Farm;
import com.example.agriculturefarm.repository.FarmRepository;

@Service
public class FarmService {

    private final FarmRepository farmRepository;

    public FarmService(FarmRepository farmRepository) {
        this.farmRepository = farmRepository;
    }

    public List<Farm> getAllFarms() {
        return farmRepository.findAll();
    }

    public Farm getFarmById(Integer id) {
        return farmRepository.findById(id).orElse(null);
    }

    public Farm saveFarm(Farm farm) {
        return farmRepository.save(farm);
    }

    public void deleteFarm(Integer id) {
        farmRepository.deleteById(id);
    }
}
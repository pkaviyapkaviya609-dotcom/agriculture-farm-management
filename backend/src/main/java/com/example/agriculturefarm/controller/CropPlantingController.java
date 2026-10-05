package com.example.agriculturefarm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agriculturefarm.entity.CropPlanting;
import com.example.agriculturefarm.service.CropPlantingService;

@RestController
@RequestMapping("/api/crop-plantings")
public class CropPlantingController {

    private final CropPlantingService cropPlantingService;

    public CropPlantingController(CropPlantingService cropPlantingService) {
        this.cropPlantingService = cropPlantingService;
    }

    @GetMapping
    public List<CropPlanting> getAllPlantings() {
        return cropPlantingService.getAllPlantings();
    }

    @GetMapping("/{id}")
    public CropPlanting getPlantingById(@PathVariable Integer id) {
        return cropPlantingService.getPlantingById(id);
    }

    @PostMapping
    public CropPlanting createPlanting(@RequestBody CropPlanting planting) {
        return cropPlantingService.savePlanting(planting);
    }

    @DeleteMapping("/{id}")
    public String deletePlanting(@PathVariable Integer id) {
        cropPlantingService.deletePlanting(id);
        return "Crop planting deleted successfully";
    }
}
package com.example.agriculturefarm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agriculturefarm.entity.Crop;
import com.example.agriculturefarm.service.CropService;

@RestController
@RequestMapping("/api/crops")
public class CropController {

    private final CropService cropService;

    public CropController(CropService cropService) {
        this.cropService = cropService;
    }

    @GetMapping
    public List<Crop> getAllCrops() {
        return cropService.getAllCrops();
    }

    @GetMapping("/{id}")
    public Crop getCropById(@PathVariable Integer id) {
        return cropService.getCropById(id);
    }

    @PostMapping
    public Crop createCrop(@RequestBody Crop crop) {
        return cropService.saveCrop(crop);
    }

    @DeleteMapping("/{id}")
    public String deleteCrop(@PathVariable Integer id) {
        cropService.deleteCrop(id);
        return "Crop deleted successfully";
    }
}
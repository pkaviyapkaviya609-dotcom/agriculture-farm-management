package com.example.agriculturefarm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.agriculturefarm.entity.Farm;
import com.example.agriculturefarm.service.FarmService;

@RestController
@RequestMapping("/api/farms")
public class FarmController {

    private final FarmService farmService;

    public FarmController(FarmService farmService) {
        this.farmService = farmService;
    }

    @GetMapping
    public List<Farm> getAllFarms() {
        return farmService.getAllFarms();
    }

    @GetMapping("/{id}")
    public Farm getFarmById(@PathVariable Integer id) {
        return farmService.getFarmById(id);
    }

    @PostMapping
    public Farm createFarm(@RequestBody Farm farm) {
        return farmService.saveFarm(farm);
    }

    @DeleteMapping("/{id}")
    public String deleteFarm(@PathVariable Integer id) {
        farmService.deleteFarm(id);
        return "Farm deleted successfully";
    }
}
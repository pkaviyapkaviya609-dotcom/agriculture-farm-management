package com.example.agriculturefarm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agriculturefarm.entity.Harvest;
import com.example.agriculturefarm.service.HarvestService;

@RestController
@RequestMapping("/api/harvests")
public class HarvestController {

    private final HarvestService harvestService;

    public HarvestController(HarvestService harvestService) {
        this.harvestService = harvestService;
    }

    @GetMapping
    public List<Harvest> getAllHarvests() {
        return harvestService.getAllHarvests();
    }

    // JOIN
    @GetMapping("/details")
    public List<Object[]> getHarvestDetails() {
        return harvestService.getHarvestDetails();
    }

    // SUBQUERY
    @GetMapping("/above-average")
    public List<Object[]> getCropsAboveAverage() {
        return harvestService.getCropsAboveAverage();
    }
    
    @GetMapping("/total")
    public Double calculateTotalHarvest() {
        return harvestService.calculateTotalHarvest();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Harvest getHarvestById(@PathVariable Integer id) {
        return harvestService.getHarvestById(id);
    }

    @PostMapping
    public Harvest createHarvest(@RequestBody Harvest harvest) {
        return harvestService.saveHarvest(harvest);
    }

    @DeleteMapping("/{id}")
    public String deleteHarvest(@PathVariable Integer id) {
        harvestService.deleteHarvest(id);
        return "Harvest deleted successfully";
    }
    
    @PostMapping("/record")
    public String recordHarvest(
            @RequestBody Harvest harvest) {

        harvestService.recordHarvest(
            harvest.getPlantingId(),
            harvest.getQuantity(),
            harvest.getHarvestDate()
        );

        return "Harvest recorded successfully";
    }
}
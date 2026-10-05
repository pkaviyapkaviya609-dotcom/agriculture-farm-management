package com.example.agriculturefarm.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "crop_planting")
public class CropPlanting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer plantingId;

    private Integer farmId;

    private Integer cropId;

    private String plantingDate;

    public CropPlanting() {
    }

    public Integer getPlantingId() {
        return plantingId;
    }

    public void setPlantingId(Integer plantingId) {
        this.plantingId = plantingId;
    }

    public Integer getFarmId() {
        return farmId;
    }

    public void setFarmId(Integer farmId) {
        this.farmId = farmId;
    }

    public Integer getCropId() {
        return cropId;
    }

    public void setCropId(Integer cropId) {
        this.cropId = cropId;
    }

    public String getPlantingDate() {
        return plantingDate;
    }

    public void setPlantingDate(String plantingDate) {
        this.plantingDate = plantingDate;
    }
}
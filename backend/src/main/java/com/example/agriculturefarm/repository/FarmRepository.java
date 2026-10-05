package com.example.agriculturefarm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agriculturefarm.entity.Farm;

public interface FarmRepository extends JpaRepository<Farm, Integer> {

}
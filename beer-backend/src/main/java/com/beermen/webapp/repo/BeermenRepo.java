package com.beermen.webapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beermen.webapp.model.Brand;

@Repository
public interface BeermenRepo extends JpaRepository<Brand, Integer>{

}

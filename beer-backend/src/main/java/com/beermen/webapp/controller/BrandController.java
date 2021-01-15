package com.beermen.webapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.beermen.webapp.exception.HandleResourceNotFoundException;
import com.beermen.webapp.model.Brand;
import com.beermen.webapp.repo.BeermenRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/beermen/api/v1.1")	//takes care of handling responses correctly, important for sb for find this class
public class BrandController {
	//if it isn't declared final, the class could modify the injected property after it was instantiated.
	private final BeermenRepo beermenRepo;
	
	//Constructor injection: don't have to provide the autowire annotation
	public BrandController(BeermenRepo beermenRepo) {
		this.beermenRepo = beermenRepo;
	}
	//can them 1 layer service se hay hon (co Interface va Interface Implement
	// type of our service  is a concrete type and DI of a hard type isn't considered as a best practise
	//dung lombok voi annotation @RequiredAgrsConstructor thì k cần viết constructor này nữa
	
	//get all product
	@GetMapping(path="/brands")
	public List<Brand> getBrand() {
		return beermenRepo.findAll();
	}
	
	//get product by id
	@GetMapping(path="/brands/{id}")
	public ResponseEntity<Brand> getBrandByID(@PathVariable int id){
		Brand brand = beermenRepo.findById(id)
				.orElseThrow(() -> new HandleResourceNotFoundException("Product not exist with id: "+id));
		return ResponseEntity.ok(brand);
	
	}
	
	//save new product
	@PostMapping(path="/brands")
	public Brand saveBrand(@RequestBody Brand brand) {
		return beermenRepo.save(brand);
	}
	
	//update product information
	@PutMapping(path="/brands/{id}")
	public ResponseEntity<Brand> updateBrand(@PathVariable int id, @RequestBody Brand brand_refer ){
		
		Brand brand = beermenRepo.findById(id)
				.orElseThrow(()-> new HandleResourceNotFoundException("unable to update product information."));
		
		brand.setName(brand_refer.getName());
		brand.setQuantity(brand_refer.getQuantity());
		brand.setDate(brand_refer.getDate());
		brand.setPrice(brand_refer.getPrice());
		brand.setPackaging(brand_refer.getPackaging());
		brand.setVolume(brand_refer.getVolume());
		brand.setAbv(brand_refer.getAbv());
		
		Brand updatedInfo = beermenRepo.save(brand);
		
		return ResponseEntity.ok(updatedInfo);
	}
	
	//delete brand
	@DeleteMapping(path="/brands/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBrand(@PathVariable int id){
		Brand brand = beermenRepo.findById(id)
				.orElseThrow(()-> new HandleResourceNotFoundException("Can not find brand with id: "+ id));
	
		beermenRepo.delete(brand);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	
	}
	
	
	
	
}

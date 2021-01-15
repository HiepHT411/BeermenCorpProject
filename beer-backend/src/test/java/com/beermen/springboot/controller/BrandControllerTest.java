package com.beermen.springboot.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.beermen.webapp.controller.BrandController;
import com.beermen.webapp.model.Brand;
import com.beermen.webapp.repo.BeermenRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.SneakyThrows;

@WebMvcTest(controllers = BrandController.class)
public class BrandControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private BeermenRepo beermenRepo;
	
	private final ObjectMapper objectMapper = new ObjectMapper();
	@Test
	@SneakyThrows
	public void getAllBrandsTest() {
//		Brand brand = new Brand(1, "Name","Quantity", "price", "data", "packaging", "volume", "abv");
//		
//		List<Object> allBrands = Arrays.asList(brand);
//		
//		when(beermenRepo.save(brand));
//		
//		mockMvc.perform(get("/api/v1/brands/1").contentType("application/json")
//				.content(objectMapper.writeValueAsString(brand)))
//				.andExpect(status().isOk());
		
		MvcResult mvcResult =  mockMvc.perform(get("/api/v1/brands")
								.accept(MediaType.APPLICATION_JSON)).andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
		
		//String content = mvcResult.getResponse().getContentAsString();
		//String expected = "{id:004,name:Heineken,quantity:,price:,date:,packaging:,volume:,abv:}";
		//JSONAssert.assertEquals(expected, content, false);
		
	}

}

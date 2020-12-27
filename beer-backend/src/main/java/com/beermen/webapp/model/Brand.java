package com.beermen.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_table")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Brand{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name="quantity")
	private String quantity;
	
	@Column(name="price")
	private String price;
	
	@Column(name="date")
	private String date;
	
	@Column(name="packaging")
	private String packaging;
	
	@Column(name = "volume")
	private String volume;
	
	//alcohol by volume
	@Column(name = "abv")
	private String abv;

	
}

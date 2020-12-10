package com.beermen.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product_table")
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
	
	public Brand() {
		super();
	}

	public Brand(int id, String name, String quantity, String price, String date, String packaging, String volume) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.date = date;
		this.packaging = packaging;
		this.volume = volume;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPackaging() {
		return packaging;
	}

	public void setPackaging(String packaging) {
		this.packaging = packaging;
	}
	
	public String getVolume() {
		return this.volume;
	}
	
	public void setVolume(String volume) {
		this.volume = volume;
	}
	
	public String getAbv() {
		return this.abv;	
	}
	
	public void setAbv(String abv) {
		this.abv = abv;
	}
	
}

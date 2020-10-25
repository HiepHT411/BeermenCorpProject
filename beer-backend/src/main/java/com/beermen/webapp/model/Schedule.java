package com.beermen.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "schedule_table")
public class Schedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "morningShift")
	private String morningShift;
	@Column(name = "afternoonShift")
	private String afternoonShift;
	
	public Schedule() {
		super();
	}
	public Schedule(int id, String morningShift, String afternoonShift) {
		super();
		this.id = id;
		this.afternoonShift = afternoonShift;
		this.morningShift = morningShift;
		
	}
	
	public int getID() {
		return this.id;
	}
	
	public void setID(int id) {
		this.id = id;
	}
	
	public String getMorningShift() {
		return this.morningShift;
	}
	public void setMorningShift(String morningShift) {
		this.morningShift = morningShift;
	}
	
	public String getAfternoonShift() {
		return this.afternoonShift;
	}
	public void setAfternoonShift(String afternoonShift) {
		this.afternoonShift = afternoonShift;
	}
}

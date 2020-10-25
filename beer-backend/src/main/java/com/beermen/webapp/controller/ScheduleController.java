package com.beermen.webapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beermen.webapp.exception.HandleResourceNotFoundException;
import com.beermen.webapp.model.Schedule;
import com.beermen.webapp.repo.ScheduleRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1")
public class ScheduleController {
	
	@Autowired
	ScheduleRepo scheduleRepo;
	
	@GetMapping(path="/schedule")
	public List<Schedule> getSchedule(){
		return scheduleRepo.findAll();
	}
	
	@GetMapping(path = "/schedule/{day}")
	public ResponseEntity<Schedule> getDaySchedule(@PathVariable int day){
		Schedule schedule = scheduleRepo.findById(day)
							.orElseThrow(() -> new HandleResourceNotFoundException("ERROR"));
		return ResponseEntity.ok(schedule);
	}
	
	@PutMapping(path = "/schedule/{day}")
	public ResponseEntity<Schedule> updateSchedule(@PathVariable int day, @RequestBody Schedule refer_sche){
		Schedule schedule = scheduleRepo.findById(day)
							.orElseThrow(()-> new HandleResourceNotFoundException("ERROR"));
		
		schedule.setMorningShift(refer_sche.getMorningShift());
		schedule.setAfternoonShift(refer_sche.getAfternoonShift());
		
		Schedule updatedSchedule = scheduleRepo.save(schedule);
		return ResponseEntity.ok(updatedSchedule);
	}
	
	
}

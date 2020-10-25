package com.beermen.webapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beermen.webapp.model.Schedule;

@Repository
public interface ScheduleRepo extends JpaRepository<Schedule, Integer> {

}

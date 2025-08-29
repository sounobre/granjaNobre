package com.dnobretech.granjanobre.repository;

import com.dnobretech.granjanobre.domain.Bird;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BirdRepository extends JpaRepository<Bird, Long> {}
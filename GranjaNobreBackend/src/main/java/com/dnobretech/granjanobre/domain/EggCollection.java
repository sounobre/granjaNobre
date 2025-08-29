package com.dnobretech.granjanobre.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.*;


@Entity
@Data
public class EggCollection {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(optional = false) private Coop coop;
    @PastOrPresent private LocalDate date = LocalDate.now();
    @PositiveOrZero private Integer eggs = 0;
    private String notes;
// getters/setters
}

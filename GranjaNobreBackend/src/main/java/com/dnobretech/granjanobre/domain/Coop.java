package com.dnobretech.granjanobre.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.*;


@Entity
@Data
public class Coop {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank private String name;
    private String location;
    @PositiveOrZero private Integer capacity;
    private LocalDate createdAt = LocalDate.now();
// getters/setters
}

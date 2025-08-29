package com.dnobretech.granjanobre.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.*;


@Entity
@Data
public class Bird {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank private String type; // "chicken" | "duck"
    private String breed;
    private LocalDate birthDate;
    @ManyToOne(optional = false) private Coop coop;
    private Boolean active = true;
// getters/setters
}

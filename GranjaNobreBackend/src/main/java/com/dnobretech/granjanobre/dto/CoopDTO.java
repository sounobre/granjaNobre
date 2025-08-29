package com.dnobretech.granjanobre.dto;

import jakarta.validation.constraints.*;
public record CoopDTO(@NotBlank String name, String location, @PositiveOrZero Integer capacity) {}

package com.granja.backend.controller;

import com.granja.backend.model.Purchase;
import com.granja.backend.repository.PurchaseRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/compras")
public class PurchaseController {

    private final PurchaseRepository repository;

    public PurchaseController(PurchaseRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Purchase create(@RequestBody Purchase purchase) {
        return repository.save(purchase);
    }
}

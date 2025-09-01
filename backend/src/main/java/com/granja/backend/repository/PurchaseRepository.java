package com.granja.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.granja.backend.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}

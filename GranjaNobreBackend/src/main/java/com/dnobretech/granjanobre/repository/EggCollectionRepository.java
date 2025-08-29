package com.dnobretech.granjanobre.repository;

import com.dnobretech.granjanobre.domain.EggCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
public interface EggCollectionRepository extends JpaRepository<EggCollection, Long> {
    List<EggCollection> findByCoopIdAndDateBetween(Long coopId, LocalDate start, LocalDate end);
}
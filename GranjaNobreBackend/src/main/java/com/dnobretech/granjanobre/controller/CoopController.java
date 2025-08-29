package com.dnobretech.granjanobre.controller;

import com.dnobretech.granjanobre.domain.Coop;
import com.dnobretech.granjanobre.dto.CoopDTO;
import com.dnobretech.granjanobre.repository.CoopRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;


@RestController
@RequestMapping("/api/coops")
public class CoopController {
    private final CoopRepository repo;
    public CoopController(CoopRepository repo){this.repo = repo;}


    @GetMapping public ResponseEntity<?> list(){ return ResponseEntity.ok(repo.findAll()); }


    @PostMapping public ResponseEntity<?> create(@RequestBody @Valid CoopDTO dto){
        Coop c = new Coop();
        c.setName(dto.name()); c.setLocation(dto.location()); c.setCapacity(dto.capacity());
        repo.save(c);
        return ResponseEntity.created(URI.create("/api/coops/"+c.getId())).body(c);
    }


    @PutMapping("/{id}") public ResponseEntity<?> update(@PathVariable Long id, @RequestBody @Valid CoopDTO dto){
        return repo.findById(id).<ResponseEntity<?>>map(c -> { c.setName(dto.name()); c.setLocation(dto.location()); c.setCapacity(dto.capacity()); repo.save(c); return ResponseEntity.ok(c);})
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}") public ResponseEntity<?> delete(@PathVariable Long id){ repo.deleteById(id); return ResponseEntity.noContent().build(); }
}

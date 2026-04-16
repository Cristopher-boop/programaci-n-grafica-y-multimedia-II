package com.unifranz.practica10.repository;

import com.unifranz.practica10.model.Diagnostico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiagnosticoRepository extends JpaRepository<Diagnostico, Long> {
    // JpaRepository ya incluye findAll(), findById(), save(), etc.
}
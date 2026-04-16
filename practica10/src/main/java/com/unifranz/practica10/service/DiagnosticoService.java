package com.unifranz.practica10.service;

import com.unifranz.practica10.dto.DiagnosticoDto;
import com.unifranz.practica10.model.Diagnostico;
import com.unifranz.practica10.repository.DiagnosticoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DiagnosticoService {

    @Autowired
    private DiagnosticoRepository diagnosticoRepository;

    public List<DiagnosticoDto> getAllDiagnosticos() {
        return diagnosticoRepository.findAll().stream()
                .map(DiagnosticoDto::new)
                .collect(Collectors.toList());
    }

    public DiagnosticoDto createDiagnostico(DiagnosticoDto dto) {
        // Convertimos el DTO a Entidad para guardarlo
        Diagnostico diagnostico = new Diagnostico(null, dto.getDescripcion(), dto.getResultado());
        
        // El repositorio lo guarda en la base de datos H2
        diagnostico = diagnosticoRepository.save(diagnostico);
        
        // Devolvemos el DTO con el ID que generó la base de datos
        return new DiagnosticoDto(diagnostico);
    }

    public DiagnosticoDto getDiagnosticoById(Long id) {
        return diagnosticoRepository.findById(id)
                .map(DiagnosticoDto::new)
                .orElse(null); // Devuelve null si no encuentra el ID
    }
}
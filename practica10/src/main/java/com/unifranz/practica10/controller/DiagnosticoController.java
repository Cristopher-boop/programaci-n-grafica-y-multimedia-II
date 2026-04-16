package com.unifranz.practica10.controller;

import com.unifranz.practica10.dto.DiagnosticoDto;
import com.unifranz.practica10.service.DiagnosticoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diagnosticos")
public class DiagnosticoController {

    @Autowired
    private DiagnosticoService diagnosticoService;

    @GetMapping
    public List<DiagnosticoDto> getDiagnosticos() {
        return diagnosticoService.getAllDiagnosticos();
    }

    @GetMapping("/{id}")
    public DiagnosticoDto getDiagnosticoById(@PathVariable Long id) {
        return diagnosticoService.getDiagnosticoById(id);
    }

    @PostMapping
    public DiagnosticoDto createDiagnostico(@RequestBody DiagnosticoDto dto) {
        return diagnosticoService.createDiagnostico(dto);
    }
}
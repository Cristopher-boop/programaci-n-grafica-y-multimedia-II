package com.unifranz.practica10.controller;

import com.unifranz.practica10.dto.LabDto;
import com.unifranz.practica10.service.LabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/labs")
public class LabController {

    @Autowired
    private LabService labService;

    @GetMapping
    public List<LabDto> getLabs() {
        return labService.getAllLabs();
    }

    @GetMapping("/{id}")
    public LabDto getLabById(@PathVariable Long id) {
        return labService.getLabById(id);
    }

    @PostMapping
    public LabDto createLab(@RequestBody LabDto dto) {
        return labService.createLab(dto);
    }
}
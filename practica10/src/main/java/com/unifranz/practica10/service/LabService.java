package com.unifranz.practica10.service;

import com.unifranz.practica10.dto.LabDto;
import com.unifranz.practica10.model.Lab;
import com.unifranz.practica10.repository.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LabService {

    @Autowired
    private LabRepository labRepository;

    public List<LabDto> getAllLabs() {
        return labRepository.findAll().stream()
                .map(LabDto::new)
                .collect(Collectors.toList());
    }

    public LabDto createLab(LabDto dto) {
        Lab lab = new Lab(null, dto.getNombreExamen(), dto.getEncargado());
        lab = labRepository.save(lab);
        return new LabDto(lab);
    }

    public LabDto getLabById(Long id) {
        return labRepository.findById(id)
                .map(LabDto::new)
                .orElse(null);
    }
}
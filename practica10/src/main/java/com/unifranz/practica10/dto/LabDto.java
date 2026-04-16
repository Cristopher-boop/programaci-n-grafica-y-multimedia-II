package com.unifranz.practica10.dto;

import com.unifranz.practica10.model.Lab;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LabDto {
    private Long id;
    private String nombreExamen;
    private String encargado;

    // Constructor para convertir de Entidad a DTO
    public LabDto(Lab lab) {
        this.id = lab.getId();
        this.nombreExamen = lab.getNombreExamen();
        this.encargado = lab.getEncargado();
    }
}
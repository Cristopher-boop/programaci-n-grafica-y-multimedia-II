package com.unifranz.practica10.dto;

import com.unifranz.practica10.model.Diagnostico;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiagnosticoDto {
    private Long id;
    private String descripcion;
    private String resultado;

    // Constructor que convierte el Model a DTO
    public DiagnosticoDto(Diagnostico diagnostico) {
        this.id = diagnostico.getId();
        this.descripcion = diagnostico.getDescripcion();
        this.resultado = diagnostico.getResultado();
    }
}
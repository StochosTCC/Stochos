package br.com.tcc.stochos.repository.filter;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
public class MetaFilter {
    private String nomemeta;
    private String rementente;
    private int urgencia;
    private LocalDateTime tempo_para_acabar;
}

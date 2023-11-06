package br.com.tcc.stochos.repository.filter;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class MetaFilter {
    private String nomemeta;
    private String nomegrupo;
    private String rementente;
    private int urgencia;
    private LocalDate tempo_para_acabar;
}

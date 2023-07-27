package br.com.tcc.stochos.repository.filter;

import lombok.Data;

import java.util.Date;

@Data
public class MetaFilter {
    private String nomemeta;
    private String nomegrupo;
    private int urgencia;
    private Date tempo_para_acabar;
}

package br.com.tcc.stochos.repository.projections;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class MetaDTO {
    private Long id;
    private String nomemeta;
    private String nomegrupo;
    private String remetente;
    private int urgencia;
    private LocalDate tempo_para_acabar;

    public MetaDTO(Long id, String nomemeta, String nomegrupo, String remetente, int urgencia, LocalDate tempo_para_acabar) {
        this.id = id;
        this.nomemeta = nomemeta;
        this.nomegrupo = nomegrupo;
        this.remetente = remetente;
        this.urgencia = urgencia;
        this.tempo_para_acabar = tempo_para_acabar;
    }
}

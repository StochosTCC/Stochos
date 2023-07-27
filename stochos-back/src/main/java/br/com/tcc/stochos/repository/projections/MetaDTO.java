package br.com.tcc.stochos.repository.projections;

import lombok.Data;

import java.util.Date;

@Data
public class MetaDTO {
    private Long id;
    private String nomemeta;
    private String nomegrupo;
    private int urgencia;
    private Date tempo_para_acabar;

    public MetaDTO(Long id, String nomemeta, String nomegrupo, int urgencia, Date tempo_para_acabar) {
        this.id = id;
        this.nomemeta = nomemeta;
        this.nomegrupo = nomegrupo;
        this.urgencia = urgencia;
        this.tempo_para_acabar = tempo_para_acabar;
    }
}

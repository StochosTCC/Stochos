package br.com.tcc.stochos.repository.projections;

import lombok.Data;

@Data
public class MetaDTO {
    private String nomemeta;
    private String nomegrupo;

    public MetaDTO(String nomemeta, String nomegrupo) {
        this.nomemeta = nomemeta;
        this.nomegrupo = nomegrupo;
    }


}

package br.com.tcc.stochos.repository.projections;

import lombok.Data;

<<<<<<< HEAD
import java.time.LocalDate;
=======
import java.time.LocalDateTime;
>>>>>>> backend
import java.util.Date;

@Data
public class MetaDTO {
    private Long id;
    private String nomemeta;
    private String nomegrupo;
    private String remetente;
    private int urgencia;
<<<<<<< HEAD
    private LocalDate tempo_para_acabar;

    public MetaDTO(Long id, String nomemeta, String nomegrupo, String remetente, int urgencia, LocalDate tempo_para_acabar) {
=======
    private LocalDateTime tempo_para_acabar;

    public MetaDTO(Long id, String nomemeta, String nomegrupo, int urgencia, LocalDateTime tempo_para_acabar) {
>>>>>>> backend
        this.id = id;
        this.nomemeta = nomemeta;
        this.nomegrupo = nomegrupo;
        this.remetente = remetente;
        this.urgencia = urgencia;
        this.tempo_para_acabar = tempo_para_acabar;
    }
}

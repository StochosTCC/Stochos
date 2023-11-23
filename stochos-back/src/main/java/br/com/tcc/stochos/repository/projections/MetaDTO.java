package br.com.tcc.stochos.repository.projections;

import br.com.tcc.stochos.model.Usuario;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MetaDTO {
    private Long id;
    private String nomemeta;
    private String nomegrupo;
    private String remetente;
    private int urgencia;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime tempo_para_acabar;
    public MetaDTO(Long id, String nomemeta, String nomegrupo, int urgencia, String remetente, LocalDateTime tempo_para_acabar) {
        this.id = id;
        this.nomemeta = nomemeta;
        this.nomegrupo = nomegrupo;
        this.remetente = remetente;
        this.urgencia = urgencia;
        this.tempo_para_acabar = tempo_para_acabar;

    }
}

package br.com.tcc.stochos.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nomemeta;
    private String descricao;
    private LocalDate tempo_para_cabar;
    private int urgencia;

    @ManyToOne
    @JoinColumn(name = "idgrupo")
    private Grupo grupo;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;


}

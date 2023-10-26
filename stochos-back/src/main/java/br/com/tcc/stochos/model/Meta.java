package br.com.tcc.stochos.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private LocalDateTime tempo_para_cabar;
    private int urgencia;

    @ManyToOne
    @JoinColumn(name = "idgrupo")
    private Grupo grupo;


}

package br.com.tcc.stochos.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomemeta;
    private String descricao;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime tempo_para_cabar;
    private int urgencia;

    @ManyToOne
    @JoinColumn(name = "idgrupo")
    private Grupo grupo;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario remetente;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "usuario_meta", joinColumns = @JoinColumn(name = "idmeta"), inverseJoinColumns = @JoinColumn(name = "idusuario"))
  private Set<Usuario> destinatarios = new HashSet<>();

}

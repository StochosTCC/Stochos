package br.com.tcc.stochos.model;

import javax.persistence.*;

@Entity
@Table(name = "usuario_grupo")
public class UsuarioGrupo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idgrupo")
    private Grupo grupo;

}

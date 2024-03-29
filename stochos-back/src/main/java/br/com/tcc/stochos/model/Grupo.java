package br.com.tcc.stochos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Grupo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String descricao;
    private String nomegrupo;


    @JsonIgnore
    @OneToMany(mappedBy = "grupo")
    private List<UsuarioGrupo> usuarioGrupos = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "idcriador")
    private Usuario criador;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_grupo", joinColumns = @JoinColumn(name = "idgrupo"), inverseJoinColumns = @JoinColumn(name = "idusuario"))
    private List<Usuario> usuarios = new ArrayList<>();

    // pode fazer isso ?????????
}

package br.com.tcc.stochos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nomeusuario")
    private String nomeusuario;
    private String email;
    private String password;
    private String phone;

    @ManyToOne
    @JoinColumn(name = "idsetor")
    private Setor setor;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<UsuarioGrupo> usuarioGrupos = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_cargo", joinColumns = @JoinColumn(name = "idusuario"), inverseJoinColumns = @JoinColumn(name = "idcargo"))
    private Set<Cargo> cargos = new HashSet<>();


    @JsonIgnore
    @OneToMany(mappedBy = "criador")
    private List<Grupo> gruposCriados = new ArrayList<>();

}

package br.com.tcc.stochos.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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

    private String nomeusuario;
    private String email;
    private String password;
    private String phone;

    @ManyToOne
    @JoinColumn(name = "idsetor")
    private Setor setor;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "usuario_grupo", joinColumns = @JoinColumn(name = "idusuario"),
            inverseJoinColumns = @JoinColumn(name = "idgrupo"))
    private List<Grupo> grupos;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "usuario_cargo", joinColumns = @JoinColumn(name = "idusuario")
            , inverseJoinColumns = @JoinColumn(name = "idcargo"))
    private List<Cargo> cargos;





}

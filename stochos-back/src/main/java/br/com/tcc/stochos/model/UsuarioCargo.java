package br.com.tcc.stochos.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "usuario_cargo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioCargo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idcargo")
    private Cargo cargo;

}

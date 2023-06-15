package br.com.tcc.stochos.repository.projections;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsuarioDTO {
    private String nomeusuario;
    private String email;
    private String phone;
    private String nomesetor;
}

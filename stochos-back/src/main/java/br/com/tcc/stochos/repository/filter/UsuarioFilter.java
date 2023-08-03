package br.com.tcc.stochos.repository.filter;

import lombok.Data;

@Data
public class UsuarioFilter {
    private String nomeusuario;
    private String email;
    private String phone;
    private String nomesetor;
    private String nomegrupo;
}

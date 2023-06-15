package br.com.tcc.stochos.repository.filter.usuario;

import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.projections.UsuarioDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UsuarioRepositoryQuery {
    public Page<UsuarioDTO>  filtrar(UsuarioFilter usuarioFilter, Pageable pageable);
}

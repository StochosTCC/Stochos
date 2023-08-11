package br.com.tcc.stochos.repository.filter.usuarioCargo;

import br.com.tcc.stochos.model.UsuarioCargo;
import br.com.tcc.stochos.repository.filter.UsuarioCargoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UsuarioCargoRepositoryQuery {
    Page<UsuarioCargo> filtrar(UsuarioCargoFilter usuarioCargoFilter, Pageable pageable);

}

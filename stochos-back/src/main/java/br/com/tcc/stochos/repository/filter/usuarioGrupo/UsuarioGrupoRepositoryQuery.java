package br.com.tcc.stochos.repository.filter.usuarioGrupo;

import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.filter.UsuarioGrupoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UsuarioGrupoRepositoryQuery {
   Page<UsuarioGrupo> filtrar(UsuarioGrupoFilter usuarioGrupoFilter, Pageable pageable);
}

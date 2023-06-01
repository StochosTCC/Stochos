package br.com.tcc.stochos.repository.filter.grupo;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface GrupoRepositoryQuery {

    public Page<Grupo> filtrar(GrupoFilter grupoFilter, Pageable pageable);

}

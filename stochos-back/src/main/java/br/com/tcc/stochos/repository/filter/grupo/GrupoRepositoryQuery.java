package br.com.tcc.stochos.repository.filter.grupo;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
import br.com.tcc.stochos.repository.projections.GrupoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface GrupoRepositoryQuery {

    public Page<GrupoDTO> filtrar(GrupoFilter grupoFilter, Pageable pageable);

}

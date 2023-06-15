package br.com.tcc.stochos.repository.filter.meta;

import br.com.tcc.stochos.repository.filter.MetaFilter;
import br.com.tcc.stochos.repository.projections.MetaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MetaRepositoryQuery {
    public Page<MetaDTO> filtrar(Pageable pageable, MetaFilter metaFilter);
}

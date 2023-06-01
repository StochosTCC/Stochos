package br.com.tcc.stochos.repository.filter.setor;

import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.filter.SetorFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SetorRepositoryQuery {

    public Page<Setor> filtrar(SetorFilter setorFilter, Pageable pageable);

}

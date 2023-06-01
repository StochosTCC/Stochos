package br.com.tcc.stochos.repository.filter.cargo;

import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.repository.filter.CargoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CargoRepositoryQuery {

    public Page<Cargo> filtrar(CargoFilter cargoFilter, Pageable pageable);

}

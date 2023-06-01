package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.repository.filter.cargo.CargoRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Integer>, CargoRepositoryQuery {
}

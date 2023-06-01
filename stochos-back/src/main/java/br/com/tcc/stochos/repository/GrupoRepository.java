package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.repository.filter.cargo.CargoRepositoryQuery;
import br.com.tcc.stochos.repository.filter.grupo.GrupoRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long>, GrupoRepositoryQuery {
}

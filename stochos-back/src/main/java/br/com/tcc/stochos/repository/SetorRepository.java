package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.filter.setor.SetorRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SetorRepository extends JpaRepository<Setor, Integer>, SetorRepositoryQuery {
}

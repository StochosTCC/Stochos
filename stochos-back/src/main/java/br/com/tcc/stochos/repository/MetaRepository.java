package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.repository.filter.meta.MetaRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetaRepository extends JpaRepository<Meta, Long>, MetaRepositoryQuery {
}

package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.UsuarioCargo;
import br.com.tcc.stochos.repository.filter.usuarioCargo.UsuarioCargoRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioCargoRepository extends JpaRepository<UsuarioCargo, Integer>, UsuarioCargoRepositoryQuery {
}

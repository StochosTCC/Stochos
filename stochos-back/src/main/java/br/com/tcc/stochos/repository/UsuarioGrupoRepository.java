package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.filter.usuarioGrupo.UsuarioGrupoRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioGrupoRepository extends JpaRepository<UsuarioGrupo, Integer>, UsuarioGrupoRepositoryQuery {
}

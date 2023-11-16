package br.com.tcc.stochos.repository;

import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.repository.filter.usuario.UsuarioRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>, UsuarioRepositoryQuery {
  UserDetails findByLogin(String nomeusuario);
}

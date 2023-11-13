package br.com.tcc.stochos.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "permissoes")
public class Permissao implements GrantedAuthority {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "role_id")
  private Integer roleId;
  @Override
  public String getAuthority() {
    return null;
  }
}

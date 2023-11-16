package br.com.tcc.stochos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String login;
    private String email;
    private String password;
    private String phone;

    private UserRole role;

    @ManyToOne
    @JoinColumn(name = "idsetor")
    private Setor setor;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<UsuarioGrupo> usuarioGrupos = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_cargo", joinColumns = @JoinColumn(name = "idusuario"), inverseJoinColumns = @JoinColumn(name = "idcargo"))
    private List<Cargo> cargo;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    if(this.role == UserRole.ADMIN) return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
    else return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
  }

  @Override
  public String getUsername() {
    return login;
  }

  @Override
  public boolean isAccountNonExpired() {
    return false;
  }

  @Override
  public boolean isAccountNonLocked() {
    return false;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return false;
  }

  @Override
  public boolean isEnabled() {
    return false;
  }
}

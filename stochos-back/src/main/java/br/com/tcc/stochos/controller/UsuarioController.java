package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.repository.UsuarioRepository;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.projections.UsuarioDTO;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Data
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/todos")
    public List<Usuario> listarTodosOsUsuarios()
    {
        return usuarioRepository.findAll();
    }

    @GetMapping()
    public Page<Usuario> filtrar(UsuarioFilter usuarioFilter, Pageable pageable)
    {
        return usuarioRepository.filtrar(usuarioFilter, pageable);
    }

  @PostMapping("/criar-usuario")
  public ResponseEntity<Usuario> criarCargo(@RequestBody Usuario usuario){
    return new ResponseEntity<>(usuarioRepository.save(usuario), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public HttpStatus deletarUsuario(@PathVariable("id") Integer id) {
    if (usuarioRepository.existsById(id)) {
      usuarioRepository.deleteById(id);
      return HttpStatus.ACCEPTED;
    }
    return HttpStatus.NOT_FOUND;
  }

  @PutMapping("/{id}")
  public HttpStatus mudarUsuario(@PathVariable Integer id, @RequestBody Usuario usuarioDetail){

    return usuarioRepository.findById(id).map(
      usuario -> {
        usuario.setEmail(usuarioDetail.getEmail());
        usuario.setSetor(usuarioDetail.getSetor());
        usuario.setPhone(usuarioDetail.getPhone());
        usuario.setNomeusuario(usuarioDetail.getNomeusuario());
        usuario.setUsuarioGrupos(usuarioDetail.getUsuarioGrupos());
        usuario.setPassword(usuarioDetail.getPassword());
        usuario.setCargos(usuarioDetail.getCargos());
        usuarioRepository.save(usuario);
        return HttpStatus.OK;
      }
    ).orElseGet(() -> {
      return HttpStatus.NOT_FOUND;
    });
  }
}

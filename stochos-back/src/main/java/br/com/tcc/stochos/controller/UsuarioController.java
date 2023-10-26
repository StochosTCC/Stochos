package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Cargo;
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

}

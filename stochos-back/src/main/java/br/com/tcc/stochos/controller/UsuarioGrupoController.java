package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.model.UsuarioCargo;
import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.UsuarioGrupoRepository;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.filter.UsuarioGrupoFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuariosGrupos")
public class UsuarioGrupoController {

    @Autowired
    private UsuarioGrupoRepository  usuarioGrupoRepository;

    @GetMapping("/todos")
    private List<UsuarioGrupo> listarTodos(){
        return usuarioGrupoRepository.findAll();
    }

    @GetMapping()
    public Page<UsuarioGrupo> filtrar(UsuarioGrupoFilter usuarioGrupoFilter, Pageable pageable)
    {
        return usuarioGrupoRepository.filtrar(usuarioGrupoFilter, pageable);
    }

  @PostMapping("/criar-usuariogrupo")
  public ResponseEntity<UsuarioGrupo> criarSetor(@RequestBody UsuarioGrupo usuarioGrupo){
    return new ResponseEntity<>(usuarioGrupoRepository.save(usuarioGrupo), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public HttpStatus deletarUsuarioGrupo(@PathVariable Integer id){
      if (usuarioGrupoRepository.existsById(id)) {
        usuarioGrupoRepository.deleteById(id);
        return HttpStatus.ACCEPTED;
      }
    return HttpStatus.NOT_FOUND;
  }

  @PutMapping("/{id}")
  public HttpStatus mudarUsuarioGrupo(@PathVariable Integer id, @RequestBody UsuarioGrupo usuarioGrupoDetail){

    return usuarioGrupoRepository.findById(id).map(
      usuarioGrupo -> {
        usuarioGrupo.setGrupo(usuarioGrupoDetail.getGrupo());
        usuarioGrupo.setUsuario(usuarioGrupoDetail.getUsuario());
        usuarioGrupoRepository.save(usuarioGrupo);
        return HttpStatus.OK;
      }
    ).orElseGet(() -> {
      return HttpStatus.NOT_FOUND;
    });
  }
}

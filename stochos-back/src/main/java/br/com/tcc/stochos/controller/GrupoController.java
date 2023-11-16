package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.repository.GrupoRepository;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
import br.com.tcc.stochos.repository.projections.GrupoDTO;
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
@RequestMapping("/grupos")
public class GrupoController {

    @Autowired
    private GrupoRepository grupoRepository;

    @GetMapping()
    public Page<GrupoDTO> filtro(GrupoFilter grupoFilter, Pageable pageable)
    {
        return grupoRepository.filtrar(grupoFilter, pageable);
    }


    @GetMapping("/todos")
    public List<Grupo> listarTodosOsGrupos()
    {
        return grupoRepository.findAll();
    }

  @PostMapping("/criar-grupo")
  public ResponseEntity<Grupo> criarGrupo(@RequestBody Grupo grupo){
    return new ResponseEntity<>(grupoRepository.save(grupo), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deletarGrupo(@PathVariable("id") Long id){
    {
      if (grupoRepository.existsById(id)){
        grupoRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);

      }
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PutMapping("/{id}")
  public HttpStatus mudarGrupo(@PathVariable Long id, @RequestBody Grupo grupoDetail){

    return grupoRepository.findById(id).map(
      grupo -> {
        grupo.setNomegrupo(grupoDetail.getNomegrupo());
        grupo.setDescricao(grupoDetail.getDescricao());
        grupo.setUsuarioGrupos(grupoDetail.getUsuarioGrupos());
        grupo.setMetas(grupoDetail.getMetas());
        grupoRepository.save(grupo);
        return HttpStatus.OK;
      }
    ).orElseGet(() -> {
      return HttpStatus.NOT_FOUND;
    });
  }
}

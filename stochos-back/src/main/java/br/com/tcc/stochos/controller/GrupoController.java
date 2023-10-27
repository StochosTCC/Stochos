package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.repository.GrupoRepository;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
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
    public Page<Grupo> filtro(GrupoFilter grupoFilter, Pageable pageable)
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
  public HttpStatus deletarGrupo(@PathVariable("id") Long id){
     try{
       grupoRepository.deleteById(id);
    }catch (Exception e)
     {
       return HttpStatus.IM_USED; // mudar lógica
     }
     return HttpStatus.ACCEPTED;
  }
}

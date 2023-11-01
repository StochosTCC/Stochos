package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.MetaRepository;
import br.com.tcc.stochos.repository.filter.MetaFilter;
import br.com.tcc.stochos.repository.projections.MetaDTO;
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
@RequestMapping("/metas")
public class MetaController {

    @Autowired
    private MetaRepository metaRepository;

    @GetMapping()
    private Page<MetaDTO> filtrar(Pageable pageable, MetaFilter metaFilter){
        return metaRepository.filtrar(pageable, metaFilter);
    }

    @GetMapping("/todos")
    private List<Meta> listarTodasAsMetas()
    {
        return metaRepository.findAll();
    }

  @PostMapping("/criar-meta")
  public ResponseEntity<Meta> criarSetor(@RequestBody Meta meta){
    return new ResponseEntity<>(metaRepository.save(meta), HttpStatus.CREATED);
  }
}

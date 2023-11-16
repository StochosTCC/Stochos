package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Meta;
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

  @PostMapping()
  public ResponseEntity<Meta> criar(@RequestBody Meta meta){
    return new ResponseEntity<>(metaRepository.save(meta), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deletarMeta(@PathVariable Long id){
      if (metaRepository.existsById(id)){
        metaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);

      }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PutMapping("/{id}")
  public HttpStatus mudarMeta(@PathVariable Long id, @RequestBody Meta metaDetail){

    return metaRepository.findById(id).map(
      meta -> {
        meta.setDescricao(metaDetail.getDescricao());
        meta.setNomemeta(metaDetail.getNomemeta());
        meta.setGrupo(metaDetail.getGrupo());
        meta.setUsuario(metaDetail.getUsuario());
        meta.setUrgencia(metaDetail.getUrgencia());
        meta.setTempo_para_cabar(metaDetail.getTempo_para_cabar());
        metaRepository.save(meta);
        return HttpStatus.OK;
      }
    ).orElseGet(() -> {
      return HttpStatus.NOT_FOUND;
    });
  }
}

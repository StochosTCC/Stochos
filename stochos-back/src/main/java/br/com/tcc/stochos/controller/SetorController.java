package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.SetorRepository;
import br.com.tcc.stochos.repository.filter.SetorFilter;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@Data
@RequestMapping("/setor")
public class SetorController {

    @Autowired
    private SetorRepository setorRepository;

    @GetMapping()
    public Page<Setor> filtrar(SetorFilter setorFilter, Pageable pageable)
    {
        return setorRepository.filtrar(setorFilter, pageable);
    }


    @GetMapping("/todos")
    public List<Setor> listarTodosOsSetores()
    {
        return setorRepository.findAll();
    }

    @PostMapping("/criar-setor")
    public ResponseEntity<Setor> criarSetor(@RequestBody Setor setor){
        return new ResponseEntity<>(setorRepository.save(setor), HttpStatus.CREATED);
    }

    @PutMapping("/mudar-setor/{id}")
    public HttpStatus mudarSetor(@PathVariable Integer id, @RequestBody Setor setorDetail){

        return setorRepository.findById(id).map(
          setor -> {
            setor.setNomesetor(setorDetail.getNomesetor());
            setor.setUsuarios(setorDetail.getUsuarios());
            setorRepository.save(setor);
            return HttpStatus.OK;
          }
        ).orElseGet(() -> {
          return HttpStatus.NOT_FOUND;
        });

    }

  @DeleteMapping("/{id}")
  public HttpStatus deletarSetor(@PathVariable("id") Integer id){
    try{
      setorRepository.deleteById(id);
    }catch (Exception e)
    {
      return HttpStatus.IM_USED; // mudar lógica
    }
    return HttpStatus.ACCEPTED;
  }
}

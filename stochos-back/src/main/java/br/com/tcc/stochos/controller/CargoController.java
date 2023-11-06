package br.com.tcc.stochos.controller;


import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.CargoRepository;
import br.com.tcc.stochos.repository.filter.CargoFilter;
import br.com.tcc.stochos.service.CargoService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
@Data
@RequestMapping("/cargos")
public class CargoController {

  @Autowired
  private CargoRepository cargoRepository;

  @Autowired
  private CargoService cargoService;
  @GetMapping()
  public Page<Cargo> paginafiltrada(CargoFilter cargoFilter, Pageable pageable) {
    return cargoRepository.filtrar(cargoFilter, pageable);
  }

  @GetMapping("/todos")
  public List<Cargo> listarTodosOsCargos() {
    return cargoRepository.findAll();
  }

  @PostMapping("/criar-cargo")
  public ResponseEntity<Cargo> criarCargo(@RequestBody Cargo cargo) {
    return new ResponseEntity<>(cargoRepository.save(cargo), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public HttpStatus deletarCargo(@PathVariable("id") Integer id) {
    try {
      cargoRepository.deleteById(id);
    } catch (Exception e){

      return HttpStatus.IM_USED;
    }
    return HttpStatus.ACCEPTED;
  }

  @PutMapping("{id}")
  public HttpStatus mudarCargo(@PathVariable Integer id, @RequestBody Cargo cargoDetail){

    return cargoRepository.findById(id).map(
      cargo -> {
        cargo.setNomecargo(cargoDetail.getNomecargo());
        cargoRepository.save(cargo);
        return HttpStatus.OK;
      }
    ).orElseGet(() -> {
      return HttpStatus.NOT_FOUND;
    });
  }
}


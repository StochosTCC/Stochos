package br.com.tcc.stochos.controller;


import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.repository.CargoRepository;
import br.com.tcc.stochos.repository.filter.CargoFilter;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Data
@RequestMapping("/cargo")
public class CargoController {

    @Autowired
    private CargoRepository cargoRepository;

    @GetMapping()
    public Page<Cargo> paginafiltrada(CargoFilter cargoFilter, Pageable pageable)
    {
        return cargoRepository.filtrar(cargoFilter, pageable);
    }


    @GetMapping("/todos")
    public List<Cargo> listarTodosOsCargos(){
        return cargoRepository.findAll();
    }
}

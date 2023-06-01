package br.com.tcc.stochos.controller;


import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.repository.CargoRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/todos")
    public List<Cargo> listarTodosOsCargos(){
        return cargoRepository.findAll();
    }
}

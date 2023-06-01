package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.repository.GrupoRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Data
@RequestMapping("/grupo")
public class GrupoController {

    @Autowired
    private GrupoRepository grupoRepository;

    @GetMapping("/todos")
    public List<Grupo> listarTodosOsGrupos()
    {
        return grupoRepository.findAll();
    }

}

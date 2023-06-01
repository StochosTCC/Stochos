package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.repository.GrupoRepository;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
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
@RequestMapping("/grupo")
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

}

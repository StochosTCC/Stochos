package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.SetorRepository;
import br.com.tcc.stochos.repository.filter.SetorFilter;
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
}

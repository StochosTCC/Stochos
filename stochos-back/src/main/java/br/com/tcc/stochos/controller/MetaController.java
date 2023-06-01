package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.repository.MetaRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Data
@RequestMapping("/meta")
public class MetaController {

    @Autowired
    private MetaRepository metaRepository;

    @GetMapping("/todos")
    private List<Meta> listarTodasAsMetas()
    {
        return metaRepository.findAll();
    }
}

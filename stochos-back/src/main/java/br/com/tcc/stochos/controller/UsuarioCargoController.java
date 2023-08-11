package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.UsuarioCargo;
import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.UsuarioCargoRepository;
import br.com.tcc.stochos.repository.filter.UsuarioCargoFilter;
import br.com.tcc.stochos.repository.filter.UsuarioGrupoFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuariosCargos")
public class UsuarioCargoController {
    @Autowired
    private UsuarioCargoRepository usuarioCargoRepository;

    @GetMapping("/todos")
    private List<UsuarioCargo> listarUsuarioCargo(){
        return usuarioCargoRepository.findAll();
    }

    @GetMapping()
    public Page<UsuarioCargo> filtrar(UsuarioCargoFilter usuarioCargoFilter, Pageable pageable)
    {
        return usuarioCargoRepository.filtrar(usuarioCargoFilter, pageable);
    }
}

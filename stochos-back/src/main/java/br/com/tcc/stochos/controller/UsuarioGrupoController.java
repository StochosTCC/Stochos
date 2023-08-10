package br.com.tcc.stochos.controller;

import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.UsuarioGrupoRepository;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.filter.UsuarioGrupoFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuariosGrupos")
public class UsuarioGrupoController {

    @Autowired
    private UsuarioGrupoRepository  usuarioGrupoRepository;

    @GetMapping("/todos")
    private List<UsuarioGrupo> listarTodos(){
        return usuarioGrupoRepository.findAll();
    }

    @GetMapping()
    public Page<UsuarioGrupo> filtrar(UsuarioGrupoFilter usuarioGrupoFilter, Pageable pageable)
    {
        return usuarioGrupoRepository.filtrar(usuarioGrupoFilter, pageable);
    }
}

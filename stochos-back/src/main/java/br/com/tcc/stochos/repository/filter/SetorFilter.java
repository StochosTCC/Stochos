package br.com.tcc.stochos.repository.filter;

import br.com.tcc.stochos.model.Setor;
import lombok.Data;

import java.util.List;

@Data
public class SetorFilter {
    private String nomesetor;

    private List<Setor> filtrarSetorPorNome()
    {
        return null;
    }
}

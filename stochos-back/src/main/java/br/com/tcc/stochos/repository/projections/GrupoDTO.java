package br.com.tcc.stochos.repository.projections;

import br.com.tcc.stochos.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GrupoDTO {
  private Long id;
  private String descricao;
  private String nomegrupo;
  private String nome_criador;
}

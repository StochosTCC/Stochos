package br.com.tcc.stochos.repository.projections;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GrupoDTO {
  private Long id;
  private String descricao;
  private String nomegrupo;
  private String nome_criador;
}

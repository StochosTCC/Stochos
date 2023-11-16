package br.com.tcc.stochos.repository.filter.grupo;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
import br.com.tcc.stochos.repository.projections.GrupoDTO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class GrupoRepositoryImpl implements GrupoRepositoryQuery {
    @Autowired
    private EntityManager manager;

    @Override
    public Page<GrupoDTO> filtrar(GrupoFilter grupoFilter, Pageable pageable)
    {

        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<GrupoDTO> criteria = builder.createQuery(GrupoDTO.class);
        Root<Grupo> root = criteria.from(Grupo.class);

        criteria.select(builder.construct(
          GrupoDTO.class,
          root.get("id"),
          root.get("descricao"),
          root.get("nomegrupo"),
          root.get("criador").get("nomeusuario")
        ));


        Predicate[] predicate = criarWhere(builder, root, grupoFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("nomegrupo")));

        TypedQuery<GrupoDTO> query = manager.createQuery(criteria);
        adicionarRestricaoParaPaginacao(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(grupoFilter));
    }

    private Long total(GrupoFilter grupoFilter) {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<Grupo> root = criteria.from(Grupo.class);

        Predicate[] predicate = criarWhere(builder, root, grupoFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("nomegrupo")));
        criteria.select(builder.count(root));

        return manager.createQuery(criteria).getSingleResult();
    }

    private void adicionarRestricaoParaPaginacao(TypedQuery<GrupoDTO> query, Pageable pageable)
    {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }

    private Predicate[] criarWhere(CriteriaBuilder builder, Root<Grupo> root, GrupoFilter grupoFilter)
    {
        List<Predicate> predicates = new ArrayList<>();
        if(!StringUtils.isEmpty(grupoFilter.getNomegrupo()))
        {
            predicates.add(builder.like(builder.lower(root.get("nomegrupo")),
                    "%" + grupoFilter.getNomegrupo().toLowerCase() + "%"
            ));
        }
        return predicates.toArray(new Predicate[predicates.size()]);
    }
}

package br.com.tcc.stochos.repository.filter.grupo;

import br.com.tcc.stochos.model.Grupo;
import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.filter.GrupoFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    public Page<Grupo> filtrar(GrupoFilter grupoFilter, Pageable pageable)
    {

        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Grupo> criteria = builder.createQuery(Grupo.class);
        Root<Grupo> root = criteria.from(Grupo.class);

        Predicate[] predicate = criarWhere(builder, root, grupoFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("nomesetor")));

        TypedQuery<Grupo> query = manager.createQuery(criteria);
        adicionarRestricaoParaPaginacao(query, pageable);

        return null;
    }

    private void adicionarRestricaoParaPaginacao(TypedQuery<Grupo> query, Pageable pageable)
    {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.set
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

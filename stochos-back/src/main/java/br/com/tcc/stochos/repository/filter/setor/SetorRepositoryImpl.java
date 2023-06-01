package br.com.tcc.stochos.repository.filter.setor;

import br.com.tcc.stochos.model.Setor;
import br.com.tcc.stochos.repository.filter.SetorFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class SetorRepositoryImpl implements SetorRepositoryQuery{

    @PersistenceContext
    public EntityManager manager;

    @Override
    public Page<Setor> filtrar(SetorFilter setorFilter, Pageable pageable)
    {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Setor> criteria = builder.createQuery(Setor.class);
        Root<Setor> root = criteria.from(Setor.class);

        Predicate[] predicate = criarWhere(builder, root, setorFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("nomesetor")));

        TypedQuery<Setor> query = manager.createQuery(criteria);
        adicionarRestricaoParaPaginacao(query, pageable);
        return new PageImpl<>(query.getResultList(), pageable, total(setorFilter));
    }


    private Long total(SetorFilter setorFilter)
    {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<Setor> root = criteria.from(Setor.class);

        Predicate[] predicate = criarWhere(builder, root, setorFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("nomesetor")));
        criteria.select(builder.count(root));
        return manager.createQuery(criteria).getSingleResult();
    }


    private void adicionarRestricaoParaPaginacao(TypedQuery<Setor> query, Pageable pageable)
    {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina  = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }


    public Predicate[] criarWhere(CriteriaBuilder builder, Root<Setor> root, SetorFilter setorFilter)
    {
        List<Predicate> predicates = new ArrayList<>();
        if (!StringUtils.isEmpty(setorFilter.getNomesetor()))
        {
            predicates.add(builder.like(builder.lower(root.get("nomesetor")),
                    "%" + setorFilter.getNomesetor().toLowerCase() + "%"
            ));
        }
        return predicates.toArray(new Predicate[predicates.size()]);
    }
}

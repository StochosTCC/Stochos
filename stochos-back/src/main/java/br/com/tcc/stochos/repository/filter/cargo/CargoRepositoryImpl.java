package br.com.tcc.stochos.repository.filter.cargo;

import br.com.tcc.stochos.model.Cargo;
import br.com.tcc.stochos.repository.filter.CargoFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class CargoRepositoryImpl implements CargoRepositoryQuery{
    @Autowired
    private EntityManager manager;

    @Override
    public Page<Cargo> filtrar(CargoFilter cargoFilter, Pageable pageable)
    {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Cargo> criteriaQuery = builder.createQuery(Cargo.class);
        Root<Cargo> root = criteriaQuery.from(Cargo.class);

        Predicate[] predicates = criarRestricoes(cargoFilter, builder, root);
        criteriaQuery.where(predicates);
        criteriaQuery.orderBy(builder.asc(root.get("nomecargo")));

        TypedQuery<Cargo> query = manager.createQuery(criteriaQuery);
        adicionarRestricoesPagina(pageable, query);

        return new PageImpl<>(query.getResultList(), pageable, total(cargoFilter));
    }

    private Long total(CargoFilter cargoFilter)
    {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
        Root<Cargo> root = criteriaQuery.from(Cargo.class);

        Predicate[] predicates = criarRestricoes(cargoFilter, builder, root);
        criteriaQuery.where(predicates);
        criteriaQuery.orderBy(builder.asc(root.get("nomecargo")));
        criteriaQuery.select(builder.count(root));

        return manager.createQuery(criteriaQuery).getSingleResult();
    }

    private void adicionarRestricoesPagina(Pageable pageable, TypedQuery<Cargo> query)
    {
        int paginaAtual = pageable.getPageNumber();
        int itensPorPagina = pageable.getPageSize();
        int primeiroItemDaPagina = paginaAtual * itensPorPagina;

        query.setFirstResult(primeiroItemDaPagina);
        query.setMaxResults(itensPorPagina);
    }

    private Predicate[] criarRestricoes(CargoFilter cargoFilter, CriteriaBuilder builder, Root<Cargo> root)
    {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(cargoFilter.getNomecargo()))
        {
            predicates.add(builder.like(builder.lower(root.get("nomecargo")),
                        "%" + cargoFilter.getNomecargo().toLowerCase() + "%"
                    ));
        }
        return predicates.toArray(new Predicate[predicates.size()]);
    }
}

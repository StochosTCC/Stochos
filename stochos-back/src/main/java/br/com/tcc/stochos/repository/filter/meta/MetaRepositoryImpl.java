package br.com.tcc.stochos.repository.filter.meta;

import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.repository.filter.MetaFilter;
import br.com.tcc.stochos.repository.projections.MetaDTO;
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

public class MetaRepositoryImpl implements MetaRepositoryQuery{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Page<MetaDTO> filtrar(Pageable pageable, MetaFilter metaFilter) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<MetaDTO> criteria = builder.createQuery(MetaDTO.class);
        Root<Meta> root = criteria.from(Meta.class);

        criteria.select(builder.construct(
                MetaDTO.class,
                root.get("id"),
                root.get("nomemeta"),
                root.get("grupo").get("nomegrupo"),
                root.get("urgencia"),
                root.get("tempo_para_cabar")
        ));

        Predicate[] predicates = criarRestricoes(builder, root, metaFilter);

        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("nomemeta")));

        TypedQuery<MetaDTO> query = entityManager.createQuery(criteria);
        adicionarRestricoesDePaginacao(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(metaFilter));

    }

    private Predicate[] criarRestricoes(CriteriaBuilder builder, Root<Meta> root, MetaFilter metaFilter) {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(metaFilter.getNomemeta())){
            predicates.add(builder.like(builder.lower(root.get("nomemeta")),
                    "%" + metaFilter.getNomemeta() + "%"));
        }

        if (!StringUtils.isEmpty(metaFilter.getNomegrupo())){
            predicates.add(builder.like(builder.lower(root.get("grupo").get("nomegrupo")),
                    "%" + metaFilter.getNomemeta() + "%"));
        }

        if (metaFilter.getUrgencia() != 0 && metaFilter.getUrgencia() < 4){
            predicates.add(builder.like(builder.lower(root.get("urgencia")),
                    "%" + metaFilter.getUrgencia() + "%"));
        }

        if (metaFilter.getTempo_para_acabar() != null){
            predicates.add(builder.greaterThanOrEqualTo(builder.lower(root.get("tempo_para_cabar")),
                    metaFilter.getNomemeta()
                    ));
        }

        if (metaFilter.getTempo_para_acabar() != null){
            predicates.add(builder.lessThanOrEqualTo(builder.lower(root.get("tempo_para_cabar")),
                    metaFilter.getNomemeta()
            ));
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private Long total(MetaFilter metaFilter)
    {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<Meta> root = criteria.from(Meta.class);

        Predicate[] predicates = criarRestricoes(builder, root, metaFilter);
        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("nomemeta")));
        criteria.select(builder.count(root));
        return entityManager.createQuery(criteria).getSingleResult();
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }

}

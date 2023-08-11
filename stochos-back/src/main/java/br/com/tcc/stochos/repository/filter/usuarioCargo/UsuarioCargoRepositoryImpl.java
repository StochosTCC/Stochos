package br.com.tcc.stochos.repository.filter.usuarioCargo;

import br.com.tcc.stochos.model.UsuarioCargo;
import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.UsuarioCargoRepository;
import br.com.tcc.stochos.repository.filter.UsuarioCargoFilter;
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

public class UsuarioCargoRepositoryImpl implements UsuarioCargoRepositoryQuery{

    @PersistenceContext
    private EntityManager manager;

    @Override
    public Page<UsuarioCargo> filtrar(UsuarioCargoFilter usuarioCargoFilter, Pageable pageable) {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<UsuarioCargo> criteria = builder.createQuery(UsuarioCargo.class);
        Root<UsuarioCargo> root = criteria.from(UsuarioCargo.class);

        Predicate[] predicate = criarWhere(builder, root, usuarioCargoFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("usuario").get("nomeusuario")));

        TypedQuery<UsuarioCargo> query = manager.createQuery(criteria);
        adicionarRestricaoParaPaginacao(query, pageable);
        return new PageImpl<>(query.getResultList(), pageable, total(usuarioCargoFilter));
    }

    private Long total(UsuarioCargoFilter usuarioCargoFilter) {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<UsuarioCargo> root = criteria.from(UsuarioCargo.class);

        Predicate[] predicates = criarWhere(builder, root, usuarioCargoFilter);
        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("usuario").get("nomeusuario")));
        criteria.select(builder.count(root));
        return manager.createQuery(criteria).getSingleResult();
    }

    private void adicionarRestricaoParaPaginacao(TypedQuery<UsuarioCargo> query, Pageable pageable) {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }

    private Predicate[] criarWhere(CriteriaBuilder builder, Root<UsuarioCargo> root, UsuarioCargoFilter usuarioCargoFilter) {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(usuarioCargoFilter.getNomeusuario())){
            predicates.add(builder.like(builder.lower(root.get("usuario").get("nomeusuario")),
                    "%" + usuarioCargoFilter.getNomeusuario().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioCargoFilter.getEmail())){
            predicates.add(builder.like(builder.lower(root.get("usuario").get("email")),
                    "%" + usuarioCargoFilter.getEmail().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioCargoFilter.getNomecargo())){
            predicates.add(builder.like(builder.lower(root.get("cargo").get("nomecargo")),
                    "%" + usuarioCargoFilter.getNomecargo().toLowerCase() + "%"
            ));
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }
}

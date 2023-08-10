package br.com.tcc.stochos.repository.filter.usuarioGrupo;


import br.com.tcc.stochos.model.UsuarioGrupo;
import br.com.tcc.stochos.repository.filter.UsuarioGrupoFilter;
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

public class UsuarioGrupoRepositoryImpl implements UsuarioGrupoRepositoryQuery{
    @PersistenceContext
    private EntityManager manager;

    @Override
    public Page<UsuarioGrupo> filtrar(UsuarioGrupoFilter usuarioGrupoFilter, Pageable pageable) {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<UsuarioGrupo> criteria = builder.createQuery(UsuarioGrupo.class);
        Root<UsuarioGrupo> root = criteria.from(UsuarioGrupo.class);

        Predicate[] predicate = criarWhere(builder, root, usuarioGrupoFilter);
        criteria.where(predicate);
        criteria.orderBy(builder.asc(root.get("usuario").get("nomeusuario")));

        TypedQuery<UsuarioGrupo> query = manager.createQuery(criteria);
        adicionarRestricaoParaPaginacao(query, pageable);
        return new PageImpl<>(query.getResultList(), pageable, total(usuarioGrupoFilter));

    }

    private Long total(UsuarioGrupoFilter usuarioGrupoFilter)
    {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<UsuarioGrupo> root = criteria.from(UsuarioGrupo.class);

        Predicate[] predicates = criarWhere(builder, root, usuarioGrupoFilter);
        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("usuario").get("nomeusuario")));
        criteria.select(builder.count(root));
        return manager.createQuery(criteria).getSingleResult();
    }

    private Predicate[] criarWhere(CriteriaBuilder builder, Root<UsuarioGrupo> root, UsuarioGrupoFilter usuarioGrupoFilter) {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(usuarioGrupoFilter.getNomeusuario())){
            predicates.add(builder.like(builder.lower(root.get("usuario").get("nomeusuario")),
                    "%" + usuarioGrupoFilter.getNomeusuario().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioGrupoFilter.getEmail())){
            predicates.add(builder.like(builder.lower(root.get("usuario").get("email")),
                    "%" + usuarioGrupoFilter.getEmail().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioGrupoFilter.getNomegrupo())){
            predicates.add(builder.like(builder.lower(root.get("grupo").get("nomegrupo")),
                    "%" + usuarioGrupoFilter.getNomegrupo().toLowerCase() + "%"
            ));
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private void adicionarRestricaoParaPaginacao(TypedQuery<?> query, Pageable pageable) {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }
}

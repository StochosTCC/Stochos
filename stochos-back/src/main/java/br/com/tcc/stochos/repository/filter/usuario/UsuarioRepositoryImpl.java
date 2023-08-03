package br.com.tcc.stochos.repository.filter.usuario;

import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.projections.UsuarioDTO;
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
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class UsuarioRepositoryImpl implements UsuarioRepositoryQuery{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Page<Usuario> filtrar(UsuarioFilter usuarioFilter, Pageable pageable) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Usuario> criteria = builder.createQuery(Usuario.class);
        Root<Usuario> root = criteria.from(Usuario.class);

      /* criteria.select(builder.construct(
                UsuarioDTO.class,
                root.get("id"),
                root.get("nomeusuario"),
                root.get("email"),
                root.get("phone"),
                root.get("setor").get("nomesetor"),
                root.get("grupos").get("nomegrupo")
        ));*/

        Predicate[] predicates = criarRestricoes(builder, root, usuarioFilter);

        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("nomeusuario")));

        TypedQuery<Usuario> query = entityManager.createQuery(criteria);
        adicionarRestricoesDePaginacao(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(usuarioFilter));

    }

    private Long total(UsuarioFilter usuarioFilter)
    {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<Usuario> root = criteria.from(Usuario.class);

        Predicate[] predicates = criarRestricoes(builder, root, usuarioFilter);
        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("nomeusuario")));
        criteria.select(builder.count(root));
        return entityManager.createQuery(criteria).getSingleResult();
    }

    private Predicate[] criarRestricoes(CriteriaBuilder builder, Root<Usuario> root, UsuarioFilter usuarioFilter) {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(usuarioFilter.getNomeusuario()))
        {
            predicates.add(builder.like(builder.lower(root.get("nomeusuario")), "%" + usuarioFilter.getNomeusuario() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioFilter.getEmail()))
        {
            predicates.add(builder.like(builder.lower(root.get("email")), "%" + usuarioFilter.getEmail() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioFilter.getNomesetor()))
        {
            predicates.add(builder.like(builder.lower(root.get("setor").get("nomesetor")), "%" + usuarioFilter.getNomesetor() + "%"));
        }

        if (!StringUtils.isEmpty(usuarioFilter.getPhone()))
        {
            predicates.add(builder.like(builder.lower(root.get("phone")), "%" + usuarioFilter.getPhone() + "%"));
        }

        if(!StringUtils.isEmpty(usuarioFilter.getNomegrupo())){
            predicates.add(builder.like(builder.lower(root.get("grupos")), "%" + usuarioFilter.getNomegrupo() + "%"));
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }


}

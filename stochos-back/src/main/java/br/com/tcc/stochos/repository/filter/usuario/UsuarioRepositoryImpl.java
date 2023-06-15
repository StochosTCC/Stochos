package br.com.tcc.stochos.repository.filter.usuario;

import br.com.tcc.stochos.model.Meta;
import br.com.tcc.stochos.model.Usuario;
import br.com.tcc.stochos.repository.filter.MetaFilter;
import br.com.tcc.stochos.repository.filter.UsuarioFilter;
import br.com.tcc.stochos.repository.projections.MetaDTO;
import br.com.tcc.stochos.repository.projections.UsuarioDTO;
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

public class UsuarioRepositoryImpl implements UsuarioRepositoryQuery{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Page<UsuarioDTO> filtrar(UsuarioFilter usuarioFilter, Pageable pageable) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<UsuarioDTO> criteria = builder.createQuery(UsuarioDTO.class);
        Root<Usuario> root = criteria.from(Usuario.class);

        criteria.select(builder.construct(
                UsuarioDTO.class,
                root.get("nomeusuario"),
                root.get("email"),
                root.get("phone"),
                root.get("setor").get("nomesetor")
        ));

        Predicate[] predicates = criarRestricoes(builder, root, usuarioFilter);

        criteria.where(predicates);
        criteria.orderBy(builder.asc(root.get("nomeusuario")));

        TypedQuery<UsuarioDTO> query = entityManager.createQuery(criteria);
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
        criteria.orderBy(builder.asc(root.get("nomemeta")));
        criteria.select(builder.count(root));
        return entityManager.createQuery(criteria).getSingleResult();
    }

    private Predicate[] criarRestricoes(CriteriaBuilder builder, Root<Usuario> root, UsuarioFilter usuarioFilter) {
        return null;
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
        int paginaatual = pageable.getPageNumber();
        int totalRegistroPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaatual * totalRegistroPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistroPorPagina);
    }


}

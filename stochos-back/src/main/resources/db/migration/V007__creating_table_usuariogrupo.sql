create table usuario_grupo(
    idusuario int not null,
    idgrupo int not null,
    primary key(idusuario, idgrupo)
);

create table usuario_cargo(
    idusuario int not null,
    idcargo int not null,
    primary key(idusuario, idcargo)
);

alter table usuario_grupo add constraint fk_usuario_grupo_usuario foreign key(idusuario) references usuario(id);
alter table usuario_grupo add constraint fk_usuario_grupo_grupo foreign key(idgrupo) references grupo(id);

alter table usuario_cargo add constraint f_usuario_cargo_usuario foreign key(idusuario) references usuario(id);
alter table usuario_cargo add constraint fk_usuario_cargo_usuario foreign key(idcargo) references usuario(id);

insert into usuario_grupo values(1,1),(2,2),(1,2);
insert into usuario_cargo values(1,1),(2,2);



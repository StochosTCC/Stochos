    create table usuario_grupo(
    id int not null auto_increment primary key,
    idgrupo int not null,
    idusuario int not null
);

create table usuario_cargo(
    idusuario int not null,
    idcargo int not null,
    primary key(idusuario, idcargo)
);

alter table usuario_grupo add constraint fk_usuario_grupo_usuario foreign key(idusuario) references usuario(id);
alter table usuario_grupo add constraint fk_usuario_grupo_grupo foreign key(idgrupo) references grupo(id);

alter table usuario_cargo add constraint fk_usuario_cargo_usuario foreign key(idusuario) references usuario(id);
alter table usuario_cargo add constraint fk_usuario_cargo_cargo foreign key(idcargo) references cargo(id);

insert into usuario_grupo values(0, 1, 1),(0, 1, 2);
insert into usuario_cargo values(1,1),(2,2);



    create table usuario_grupo(
    id int not null auto_increment primary key,
    idgrupo int not null,
    idusuario int not null
);

create table usuario_cargo(
    id int not null auto_increment primary key,
    idusuario int not null,
    idcargo int not null
);

alter table usuario_grupo add constraint fk_usuario_grupo_usuario foreign key(idusuario) references usuario(id) on delete cascade;
alter table usuario_grupo add constraint fk_usuario_grupo_grupo foreign key(idgrupo) references grupo(id) on delete cascade;

alter table usuario_cargo add constraint fk_usuario_cargo_usuario foreign key(idusuario) references usuario(id);
alter table usuario_cargo add constraint fk_usuario_cargo_cargo foreign key(idcargo) references cargo(id);



insert into usuario_grupo values(0, 1, 1),(0, 1, 2);
insert into usuario_grupo values(0, 2, 1),(0, 1, 3);
insert into usuario_cargo values(0, 2, 1),(0, 2,2);
insert into usuario_cargo values(0, 2, 3);





alter table usuario add constraint fk_usuario_setor foreign key (idsetor) references setor(id);
alter table meta add constraint fk_meta_grupo foreign key (idgrupo) references grupo(id);

insert into grupo values(0, "bla bla bla", "grupo1");
insert into grupo values(0, "ble ble ble", "grupo2");
insert into grupo values(0, "bli bli bli", "grupo3");

insert into meta values(0, "meta1", "adsdadsa", "2006-01-13", 3, 1);
insert into meta values(0, "meta2", "BBBBBBBB", "2007-01-13", 1, 2);
insert into meta values(0, "meta3", "CCCCCCCC", "2008-01-13", 2, 3);

insert into setor values(0, "setor a");
insert into setor values(0, "setor b");
insert into setor values(0, "setor c");

insert into usuario values(0, "thed4rkl3tch", "email@domain.tld", "ge", "1111111111", 1);
insert into usuario values(0, "gabrielHsantos", "email2@domain.tld", "ge", "11111122222", 3);
insert into usuario values(0, "aaaaaaaaaaaaaaa", "email3@domain.tld", "ge", "3333333333", 2);

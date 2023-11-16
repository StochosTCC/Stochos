alter table usuario add constraint fk_usuario_setor foreign key (idsetor) references setor(id);
alter table meta add constraint fk_meta_grupo foreign key (idgrupo) references grupo(id);





insert into meta values(0, "meta1", "adsdadsa", "2006-01-13", 3, 1, 1);
insert into meta values(0, "meta2", "BBBBBBBB", "2007-01-13", 1, 2, 2);
insert into meta values(0, "meta3", "CCCCCCCC", "2008-01-13", 2, 3, 3);

insert into setor values(0, "Setor A");
insert into setor values(0, "Setor B");
insert into setor values(0, "Setor C");

insert into usuario values(0, "thed4rkl3tch", "ADMIN", "email@domain.tld", "senha", "1111111111", 1);
insert into usuario values(0, "gabrielHsantos", "USER", "email2@domain.tld", "password", "11111122222", 3);
insert into usuario values(0, "aaaaaaaaaaaaaaa", "USER", "email3@domain.tld", "123123", "3333333333", 2);

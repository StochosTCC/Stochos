 create table meta(
    id int not null auto_increment primary key,
    nomemeta varchar(50) not null,
    descricao varchar(200) not null,
    prazo datetime not null,
    urgencia int not null,
    idusuario int not null
 );




create table usuario(
   id int not null auto_increment primary key,
   login varchar(40) not null,
   role TEXT not null,
   email varchar(200) not null,
   password varchar(16) not null,
   phone varchar(40) not null,
   idsetor int not null
);


create database empresautn;

use empresautn;

-- Cración de una tabla Persona --
create table producto(
idProducto int unsigned  not null auto_increment,
nombre varchar(100) not null,
precio decimal not null,
descripcion varchar(150) not null,
primary key(idProducto)
);

create table contacto(
idContacto int unsigned  not null auto_increment,
nombre varchar(100) not null,
email varchar(150) not null,
primary key(idContacto)
);

drop table contacto;
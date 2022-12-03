-- Mi primer Script de Bases de Datos --

-- Creación de una base de datos --
create database prueba;

-- Selección de una base de datos -- 
use prueba;

-- Eliminar Bases de Datos -- 
drop database prueba;

-- Cración de una tabla Persona --
create table persona(
idPersona int unsigned  not null auto_increment,
nombre varchar(50),
apellido varchar(50),
telefono int,
primary key(idPersona)
); 

-- Eliminar una tabla de datos --
drop table persona;

-- CRUD --
-- Insetar datos dentro de la tabla: Create--
insert into persona values(null, "Pepe", "Pérez", 123456745);
insert into persona values(null, "Juana", "Pérez", 123456799);
insert into persona values(null, "Mario", "Pérez", 123456711);

-- CRUD --
-- Seleccionar todos los datos dentro de la tabla: Read --
select * from prueba.persona;

-- Seleccino algunos campos --
select nombre, apellido from persona;

select idPersona, nombre from persona;

-- CRUD --
-- Actualizar un datos dentro de la tabla: Update --
update persona
set nombre = "Solcito"
where idPersona = 1;

-- Actualizar todos los datos dentro de la tabla: Update --
update persona
set nombre = "Juan";

-- CRUD --
-- Eliminar un dato dentro de la tabla: Delete --
delete from persona
where idPersona = 3; 

-- CRUD --
-- Eliminar tods los datos dentro de la tabla: Delete --
delete from persona
where nombre = "Juan";
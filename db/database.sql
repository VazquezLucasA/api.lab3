CREATE DATABASE Dorado_Vazquez;
use Dorado_Vazquez;


CREATE TABLE Usuarios (
  idUsuario INT auto_increment not null,
  nombre varchar(255) default null,
  contraseña varchar(255) default null,
  tipoUsuario varchar(255) default 'user',
  primary key (idUsuario)
);

INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) 
VALUES 
    ('Lucas', '1234','admin'),
    ('Rocio', '1234', 'admin'),
    ('Juan', '1234', 'user'),
    ('Paul', '1234', 'user'),
    ('Rosa', '1234', 'user');



CREATE TABLE Productos (
  idProducto INT auto_increment not null,
  nombre varchar(255) default null,
  descripcion varchar(255) default null,
  precio float,
  descuento float default 0,
  primary key (idUsuario)
);

INSERT INTO Productos(nombre, descripcion, precio, descuento) 
VALUES 
    ('S23', 'celular', 750, 10),
    ('iphone 14', 'celular', 1500, 5),
    ('s22', 'celular', 550, 10),
    ('moto g100', 'celular', 750, 20),
    ('tcl 60', 'celular', 250, 30);

-- drop database Dorado_Vazquez;
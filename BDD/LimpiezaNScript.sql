CREATE DATABASE LimpiezaN;

use LiempiezaN;

create table Usuario (
id int not null,
usuario varchar(20) not null,
pass varchar(20) not null,
correo varchar(50) not null,
token varchar(100),
estado int not null,
constraint PKUsuario primary key (id));

create table Cliente (
id int not null,
nombre varchar(30) not null,
rfc varchar(13),
telefono varchar(20),
correo varchar(50) not null,
direccion varchar(100),
estado int not null,
constraint PKCliente primary key (id));

create table Adeudo (
id int not null,
factura varchar(10) not null,
adeudo numeric(10, 2) not null,
pagado numeric(10, 2),
total numeric(10, 2) not null,
fecha_factura date not null,
fecha_limite date not null,
notas varchar(250),
estado int not null,
constraint PKAdeudo primary key (id));

create table Empleado (
id int not null,
nombre varchar(30) not null,
apellido1 varchar(30) not null,
apellido2 varchar(30),
telefono varchar(20),
correo varchar(50),
estado int not null,
constraint PKEmpleado primary key (id));

create table Cuenta (
cuenta int not null,
banco varchar(15),
constraint PKCuenta primary key (cuenta));

create table Cliente_Adeudo (
id_cliente int not null,
id_Adeudo int not null,
constraint PKCliente_Adeudo primary key (id_cliente, id_Adeudo),
constraint FKCliente_AdeudoC foreign key (id_cliente) 
references Usuario (id),
constraint FKCliente_AdeudoD foreign key (id_Adeudo)
references Adeudo (id));

create table Empleado_Usuario (
id_usuario int not null,
id_empleado int not null,
constraint PKEmpleado_Usuario primary key (id_cliente, id_usuario),
constraint FKEmpleado_UsuarioU foreign key (id_usuario)
references Usuario (id),
constraint FKEmpleado_Usuario foreign key (id_empleado)
references Empleado (id));

create table Cliente_Cuenta (
cuenta int not null,
id_cliente int not null,
constraint PKCliente_Cuenta primary key (cuenta, id_cliente),
constraint FKCliente_CuentaCu foreign key (cuenta)
references Cuenta (cuenta),
constraint FKCliente_CuentaCl foreign key (id_cliente)
references Cliente (id));



# REST API TBTBGLOBAL TEST

Esta api esta disenada en nodejs, express, con sequalize y mysql

## Script

para correr este backend no esta demas recordar que tienes que ejecutar
npm install => para instalar las dependencias
npm run dev => para iniciar el servidor local con nodemon y ejercutarse luego de cada cambio
npm run test => para ejecutar los test

## EndPoints

## .env

para usar variables de entorno se tiene que crear un archivo .env donde ingresas el usario y contrasena de mysql
MYSQL_USER= usuario de mysql (ejemplo 'root')
MYSQL_PASSWORD= password de mysql (ejemplo 'contrasena321')
MYSQL_DATABASE_NAME= nombre de la base de datos a conectar (ejemplo 'PRUEBA1')
HOST=nombre del host en el que se realiza la prueba (ejemplo 'localhost')

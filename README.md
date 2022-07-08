# REST API TBTBGLOBAL TEST

Esta api esta disenada en nodejs, express, con sequalize y mysql

## Script

para correr este backend no esta demas recordar que tienes que ejecutar
npm install => para instalar las dependencias
npm run dev => para iniciar el servidor local con nodemon y ejercutarse luego de cada cambio
npm run test => para ejecutar los test

## EndPoints

### post

GET api/posts/ muestra todos los los post

GET api/posts/id muestra el post correspondiente a el id en caso de que el id no se en cuentre arroja un error

POST api/posts/ crea un post con los datos enviados en el body si el cuerpo enviado esta vacio arrojara un error
si el post tiene un title ya creado enviara un error y si los datos no son correspondientes a la tabla enviara un error

PUT api/posts/id actualiza los datos en el id correspondiente si el id no esta en la base de datos enviara error

DELETE api/posts/id elimina post correspondiente al id enviado si el id no esta en la base de datos enviara error

## .env

para usar variables de entorno se tiene que crear un archivo .env donde ingresas los siguientes datos
MYSQL_USER= usuario de mysql (ejemplo 'root')
MYSQL_PASSWORD= password de mysql (ejemplo 'contrasena321')
MYSQL_DATABASE_NAME= nombre de la base de datos a conectar (ejemplo 'PRUEBA1')
HOST=nombre del host en el que se realiza la prueba (ejemplo 'localhost')

## a mejorar

- tengo que mejorar la construsccion de los test ya que me toco aprender muy rapido sequlize para pode usarlo en este backend, los test estan corriendo en la base de datos de produccion pero no deberia ser asi y usa los datos de los script creados en sql para que funcionen todos los test

- mejorar mi manejo en base de datos sql

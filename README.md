# PSICO-UNLP Map

Mapa de materias y sus correlativas de la carrera de Psicología de la UNLP.

---

Este proyecto está basado en el proyecto [FIUBA Map](http://fede.dm/FIUBA-Map) creado por [FdelMazo](http://fede.dm/) para  presentar de una manera interactiva el plan de estudios de las carreras de la Facultad de Ingeniería, Universidad de Buenos Aires, para saber que materias se pueden cursar, cuantos créditos se tienen actualmente y demás.


La idea es adaptar este proyecto para la carrera de Psicología de la UNLP, y agregarle algunas funcionalidades que se consideren útiles.

---

## Desarrollo

Para agregar un feature o fixear un issue hay que clonar el repositorio, instalar las dependencias con `npm install` y después correr la aplicación con `npm start`. En `localhost:3000/` va a estar corriendo la aplicación constantemente, y toda modificación que se haga al código se va a ver reflejada en la página.

Una vez terminados los cambios, con solo hacer un PR basta (porque la aplicación se compila automáticamente con cada push a master).

Hay que tener en cuenta que localmente no funciona la base de datos, para evitar que se le pueda pegar desde cualquier lado. Si se necesita arreglar algo que interactua con la db, pedirle a algún autor la API key correspondiente.

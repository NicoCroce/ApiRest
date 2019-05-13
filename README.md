# ApiRest
Crear una api rest con nodejs + express

## Requerimientos
1) Verificar que tenemos nodejs y npm instaldos. 
  > $ node -v && npm -v


## 1-index.js
Solo verifica que podemos ejecutar nodejs. 
  > $ node 1-index.js

## 2-index.js
  Instalar express y ejecutar desde el navegador. Retornar HTML.

  1) Instalar las depencias, en este caso solo express.
  > $ npm install
  2) Ejecutar script
  > node index.js
  3) Verificar en el navegador.

## 3-index.js
  Mostrar un servicio de tipo get.

  1) Iniciar el server
  > $ node 3-index.js
  2) Verificar en el navegador con la ruta
  > http://localhost:1122/list
  3) Explicación de GET.
  4) Mostrar en POSTMAN.

## 4-index.js
  Mostrar un servicio de tipo POST, obtener y setear header.

  1) Iniciar el server
  > $ node 4-index.js
  2) Explicación de POST desde postman.
  3) Mostrar HEADERS.

## 5-index.js
  Mostrar que con express.Router() se ordenan los métodos.

  1) Iniciar el server
  > $ node 5-index.js
  2) Explicación de app.route().
  3) Mostrar que req.body.user se espera "Ninja" y retorna el body completo, de lo contrario, error.

## 6-index.js
  Mostrar que con express.Router() se ordenan los métodos.

  1) Iniciar el server
  > $ node 5-index.js
  2) Explicación de app.route().
  3) Mostrar que req.body.user se espera "Ninja" y retorna el body completo, de lo contrario, error.
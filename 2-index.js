// server.js

// VARIABLES
// ==============================================

const express = require('express');
const app     = express();
const port    =   process.env.PORT || 1122;

// RUTAS
// ==============================================

app.get('/', function(req, res) {
    res.send('Prueba de API');  
});

// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/* 

1) Agregar H1 a la respuesta.  

*/
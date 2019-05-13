// server.js

// VARIABLES
// ==============================================

const express = require('express');
const app     = express();
const port    =   process.env.PORT || 1122;

// RUTAS
// ==============================================

app.get('/', function(req, res) {
    res.send('<h1 style="text-align: center; margin-top: 40px;">Esta es una prueba enviando HTML  👩‍💻 👨‍💻</h1>');  
});

// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/* 

1) Agregar H1 a la respuesta.  
    <h1 style="text-align: center; margin-top: 40px;">Esta es una prueba enviando HTML  👩‍💻 👨‍💻</h1>
*/
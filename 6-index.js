// server.js

// VARIABLES
// ==============================================

const express = require('express');
const bodyParser = require('body-parser');
const app     = express();
const port    =   process.env.PORT || 1122;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware.
app.use(function(req, res, next) {
    // muestra cada request en consola.
    console.log(req.method, req.url);
    res.set('time-stamp', Date.now())
    // Continúa con la ejecución.
    next(); 
});

express.Router();


// RUTAS
// ==============================================

app.get('/', function(req, res) {
    res.send('Prueba de API');  
});

app.route('/list')
    .get(function(req, res) {
        res.send({
            taller: 'Api REST',
            participantes: 10,
            referencias: ['nodejs', 'js', 'express', 'server'] 
        });  
    })
    .post(function(req, res) {
        console.log(req.body);
        (req.body.user == 'Ninja') ? res.status(200).send(req.body) : res.status(500).send('Usuario Incorrecto');
    });

// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/* 

1) Mostrar middleware.
2) Mostrar diferentes tipos de respuestas para POSTMAN

POSTMAN
    Header  Content-Type: application/json
    
    Body: {
        "user":"Ninja",
        "psw": "Ninja201"
    }
*/
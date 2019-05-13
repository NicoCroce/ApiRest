// server.js

// VARIABLES
// ==============================================

const express = require('express');
const bodyParser = require('body-parser');
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
const app     = express();
const port    =   process.env.PORT || 1122;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RUTAS
// ==============================================

app.get('/', function(req, res) {
    res.send('Prueba de API');  
});

app.get('/list', function(req, res) {
    res.send({
        taller: 'Api REST',
        participantes: 10,
        referencias: ['nodejs', 'js', 'express', 'server']
    });
});

app.post('/list', function(req, res) {
    (req.body.user == 'Ninja') ? res.status(200).send(req.body) : res.status(500).send('Usuario Incorrecto');
});

// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/* 

1) Mostrar body-parser 
2) Mostrar diferentes tipos de respuestas para POSTMAN
3) Agregar un header en /list   res.set('HEADER', 'Taller');
4) Obtener HEADER
        console.log(`BODY: ${req.body}`);
        console.log(`HEADERS: ${JSON.stringify(req.headers)}`);
        console.log(`Postman-Token: ${req.header('Postman-Token')}`);

POSTMAN
    Header  Content-Type: application/json
    
    Body: {
        "user":"Ninja",
        "psw": "Ninja201"
    }
*/
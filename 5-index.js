// server.js

// VARIABLES
// ==============================================

const express = require('express');
const bodyParser = require('body-parser');
const app     = express();
const port    =   process.env.PORT || 1122;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const router = express.Router();


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
            words: ['nodejs', 'js', 'express', 'server'] 
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

1) Mostrar Router
2) Mostrar diferentes tipos de respuestas para POSTMAN

POSTMAN
    Header  Content-Type: application/json
    
    Body: {
        "user":"Ninja",
        "psw": "Ninja201"
    }
*/
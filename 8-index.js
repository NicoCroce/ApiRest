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
    //console.log(req.method, req.url);
    // Continúa con la ejecución.
    next(); 
});

const router = express.Router();


// RUTAS
// ==============================================

let response = {
    taller: 'Api REST',
    participantes: '10',
    referencias: ['nodejs', 'js', 'express', 'server'] 
}


app.get('/', function(req, res) {
    res.send('Prueba de API');  
});

//Como queryString.
app.route('/list')
    //http://localhost:1122/list?key=taller
    .get(function(req, res) {
        if(req.query.key) {
            res.status(200).send(response[req.query.key]);
        } else {
            res.send(response);  
        }
    })
    .post(function(req, res) {
        (req.body.user == 'Ninja') ? res.status(200).send(req.body) : res.status(500).send('Usuario Incorrecto');
    })
    .put(function(req, res){
        if(req.body.id) {
            response[req.body.id] = req.body.data;
            res.status(200).send(response);
        } else {
            res.status(500).send('ID No definido');
        }
    })
    //http://localhost:1122/list?referencias=1
    .delete(function(req, res){
        if(req.query.id) {
            response.referencias.splice(req.query.id, 1);
            res.status(200).send(response);
        } else {
            res.status(500).send('ID No definido');
        }
    });


//Como path de la URL.
//http://localhost:1122/list/taller
app.get('/list/:word', (req, res) => {
    res.status(200).send(response[req.params.word]);
});

app.delete('/list/:id', (req, res) => {
    if(req.params.id) {
        response.referencias.splice(req.params.id, 1);
        res.status(200).send(response);
    } else {
        res.status(500).send('ID No definido');
    }
});

// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/* 

1) Mostrar PUT

POSTMAN PATH
    http://localhost:1122/list

POSTMAN BODY
    {
        "id":"taller",
        "data": "Taller Ninja Api Restfull"
    } 
    
*/

//2) Mostrar DELETE.
//POSTMAN PATH


//POSTMAN BODY
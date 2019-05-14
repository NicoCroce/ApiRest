// server.js

// VARIABLES
// ==============================================

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1122;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware.
app.use(function (req, res, next) {
    // muestra cada request en consola.
    //console.log(req.method, req.url);
    // Continúa con la ejecución.
    next();
});

express.Router();


// RUTAS
// ==============================================

let response = {
    taller: 'Api REST',
    participantes: {
        0: {
            nombre: 'Nicolás Croce',
            area: "GLOMO"
        },
        1: {
            nombre: 'Federico Croce',
            area: "Fnet"
        }
    },
    referencias: ['nodejs', 'js', 'express', 'server']
}


app.get('/', function (req, res) {
    res.send('Prueba de API');
});

//Como queryString.
app.route('/list')
    //http://localhost:1122/list?key=taller
    .get(function (req, res) {
        if (req.query.key) {
            res.status(200).send(response[req.query.key]);
        } else {
            res.send(response);
        }
    })
    .post(function (req, res) {
        (req.body.user == 'Ninja') ? res.status(200).send(req.body) : res.status(500).send('Usuario Incorrecto');
    })
    //http://localhost:1122/list?referencias=1
    .delete(function (req, res) {
        if (req.query.id) {
            response.referencias.splice(req.query.id, 1);
            res.status(200).send(response);
        } else {
            res.status(500).send('ID No definido');
        }
    });

app.route('/list/users')
    .post(function (req, res) {
        let newIndex = Object.keys(response.participantes).length;
        response['participantes'][newIndex] = req.body;
        res.status(200).send(response);
    })
    .put((req, res) => {
        response['participantes'][req.query.id] = req.body;
        res.status(200).send(response);
    })
    .patch(function (req, res) {
        console.log(req.query);
        response['participantes'][req.query.id][req.body.prop] = req.body.value;
        res.status(200).send(response);
    })


//Como path de la URL.
//http://localhost:1122/list/taller
app.get('/list/:word', (req, res) => {
    res.status(200).send(response[req.params.word]);
});

app.delete('/list/:id', (req, res) => {
    if (req.params.id) {
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

2) Mostrar PATCH

POSTMAN PATH
    http://localhost:1122/list

POSTMAN BODY
    {
        "id":"taller",
        "data": "Taller Ninja Api Restfull"
    }
*/

// server.js

// VARIABLES
// ==============================================

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1122;
let dataClima = require('./clima.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

express.Router();


// RUTAS
// ==============================================

app.get('/', (req, res) => {
    res.status(200).send(dataClima);
});

app.route('/humedad')
    .get((req, res) => {
        res.status(200).send(dataClima['humedad'])
    })
    .post((req, res) => {
        dataClima['humedad']['quincenal'] = req.body;
        res.status(200).send({ status: 200, text: 'Se agregó', payload: dataClima['humedad']['quincenal'] })
    })
    .delete((req, res) => {
        delete dataClima.humedad.anual;
        res.status(200).send({ status: 200, text: 'Se eliminó', payload: dataClima['humedad'] });
    });

app.route('/viento')
    .patch((req, res) => {
        Object.assign(dataClima.viento.anual, req.body); 
        res.status(200).send( { status: 200, text: 'Se modificó max', payload: dataClima.viento });
    })
    .get((req, res) => {
        res.status(200).send( { status: 200, text: 'Obtiene ' + req.query.propiedad, payload: dataClima.viento[req.query.propiedad] });
    })



// INICIAR SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log(`http://localhost:${port}`);


/*
    1) Leventar el server y obtener todos los datos del json.
    2) Obtener todos los datos de humedad dentro de /humedad.
    3) Agregar Humedad quincenal con atributos max: 90% y min: 30% dentro de /humedad.
    4) Eliminar temperatura anual  dentro de /humedad.
    4) Modificar viento anual max = "50.9 km/h"  dentro de /viento.
    5) Obtener datos del viento dependiendo del parámetro que se envía. "anual", "delSector", "diaria", "hora", "mensual", "velocidad" desde /viento.
*/

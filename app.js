const express = require('express');
const config = require('./config');

const carros = require('')

const app = express();

app.set('port', config.app.port)

app.use('/vehiculo/carros', carros)

module.esports = app;
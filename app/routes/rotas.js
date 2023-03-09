const express = require('express')
const v1Home = require('./v1/home')
const v1Sobre = require('./v1/sobre')
const v1Gerador = require('./v1/gerador')

module.exports = (app) => {
    const routeV1 = express.Router();

    v1Home(routeV1);
    v1Sobre(routeV1);
    v1Gerador(routeV1);

    app.use('', routeV1);
}
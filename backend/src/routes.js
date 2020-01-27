const { Router } = require('express');
const ClasherController = require('./controllers/clasher.controller');
const ClanController = require('./controllers/clan.controller');

const routes = Router();

routes.post('/clasher', ClasherController.getClasherInfo);
routes.get('/clan', ClanController.getClanInfo);

module.exports = routes;

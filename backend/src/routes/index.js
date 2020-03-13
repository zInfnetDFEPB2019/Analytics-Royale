const { Router } = require("express");

const searchController = require("../controllers/search-controller");

const routes = Router();

routes.post("/", searchController.getInfo);

module.exports = routes;

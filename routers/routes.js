const routes = require("express").Router();
const TaskController = require("../controller/TarefaController");

routes.get("/", TaskController.getAll);

module.exports = routes;
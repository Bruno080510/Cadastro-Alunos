const routes = require("express").Router();
const TaskController = require("../controller/TarefaController");

routes.get("/", TaskController.getAllTarefa);
routes.post("/create", TaskController.createTarefa)

module.exports = routes;

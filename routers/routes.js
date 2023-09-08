const routes = require("express").Router();
const TaskController = require("../controller/TarefaController");

routes.get("/", TaskController.getAllTarefa);
routes.post("/create", TaskController.createTarefa)
routes.get("/getById/:id/:method", TaskController.getById)
routes.post("/updateOne/:id", TaskController.updateOneTask)
routes.get("/deleteOne/:id/", TaskController.deleteOneTask)


module.exports = routes;

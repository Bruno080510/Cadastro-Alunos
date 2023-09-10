const routes = require("express").Router();
const TaskController = require("../controller/TarefaController");

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

routes.get("/", TaskController.getAllTarefa);
routes.post("/create", upload.single("file"), TaskController.createTarefa)
routes.get("/getById/:id/:method", TaskController.getById)
routes.post("/updateOne/:id", TaskController.updateOneTask)
routes.get("/deleteOne/:id/", TaskController.deleteOneTask)


module.exports = routes;

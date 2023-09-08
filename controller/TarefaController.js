const Tarefa = require("../models/Tarefa")

const getAllTarefa = async (req, res) => {
    try{
        const tasksList = await Tarefa.find()
        return res.render("index", {tasksList,taskDelete:null, task: null});
    }catch (err){
        res.status(500).send({error: err.message})
    }
    
};

const createTarefa = async (req, res) => {
    const tarefa = req.body;

    if(!tarefa.tarefa){
        return res.redirect("/")
    }

    try{
        await  Tarefa.create(tarefa)
        return res.redirect("/")
    }catch (err) {
        res.status(500).send({error: err.message})
    }

    
}
const getById = async (req, res) => {

    try{
        const tasksList = await Tarefa.find()
        if(req.params.method == "update"){
            const task = await Tarefa.findOne({_id: req.params.id})
            res.render("index", {task, taskDelete:null, tasksList})
        }
        else{
            const taskDelete = await Tarefa.findOne({_id: req.params.id})
            res.render("index", {task:null, taskDelete, tasksList})
        }

    }catch(err){
        res.status(500).send({error: err.message})
    }

}

const updateOneTask = async (req, res) => {

    try{
        const task = req.body
        await Tarefa.updateOne({_id: req.params.id}, task)
        res.redirect("/")
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

const deleteOneTask = async (req, res) =>{
    try {
        await Tarefa.deleteOne({_id: req.params.id})
        res.redirect("/");
    } catch(err){
        res.status(500).send({error: err.message})
    }
}



module.exports = {
    getAllTarefa,
    createTarefa,
    getById,
    updateOneTask,
    deleteOneTask
};
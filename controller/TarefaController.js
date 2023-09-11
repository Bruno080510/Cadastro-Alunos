const Tarefa = require("../models/Tarefa");

let message = "";
let type = "";

const getAllTarefa = async (req, res) => {
    try {
        setTimeout(() => {
            message = "";
        }, 3000);

        const tasksList = await Tarefa.find();

        return res.render("index", {
            tasksList,
            taskDelete: null,
            task: null,
            message,
            type,
        });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const createTarefa = async (req, res) => {
    const file = req.file;

    if (
        !req.body.tarefa ||
        !req.body.cpf ||
        !req.body.matricula ||
        !req.body.rg ||
        !req.body.endereco ||
        !file?.path
    ) {
        message = "Existe campos não preenchidos";
        type = "danger";
        return res.redirect("/");
    }
    const tarefa = {
        tarefa: req.body.tarefa,
        cpf: req.body.cpf,
        matricula: req.body.matricula,
        rg: req.body.rg,
        endereco: req.body.endereco,
        file: file.path.split("public\\")[1],
    };

    try {
        await Tarefa.create(tarefa);
        message = "Criado com sucesso";
        type = "success";
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const tasksList = await Tarefa.find();
        if (req.params.method == "update") {
            const task = await Tarefa.findOne({ _id: req.params.id });
            res.render("index", {
                task,
                taskDelete: null,
                tasksList,
                message,
                type,
            });
        } else {
            const taskDelete = await Tarefa.findOne({ _id: req.params.id });
            res.render("index", {
                task: null,
                taskDelete,
                tasksList,
                message,
                type,
            });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const updateOneTask = async (req, res) => {
    try {
        const task = req.body;
        await Tarefa.updateOne({ _id: req.params.id }, task);
        message = "Editado com sucesso";
        type = "success";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const deleteOneTask = async (req, res) => {
    try {
        await Tarefa.deleteOne({ _id: req.params.id });
        message = "deletado com sucesso";
        type = "success";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    getAllTarefa,
    createTarefa,
    getById,
    updateOneTask,
    deleteOneTask,
};

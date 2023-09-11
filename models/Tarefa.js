const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tarefaSchema = new Schema({
    tarefa: {
        type: String,
        require: true,
    },
    cpf: {
        type: Number,
        require: true,
    },
    matricula: {
        type: Number,
        require: true,
    },
    rg: {
        type: Number,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    file: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        require: true,
    },
});

module.exports = mongoose.model("Task", tarefaSchema);

const mongoose = require("mongoose")

const tarefaSchema = new mongoose.Schema({
    tarefa: {
        type: String,
        require: true,
    },
    cpf:{
        type: Number,
        require:true
    },
    matricula:{
        type: Number,
        require:true
    },
    rg:{
        type:Number,
        require:true
    },
    endereco:{
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true,
    },
})

module.exports = mongoose.model("Task", tarefaSchema)
const mongoose = require("mongoose")

const tarefaSchema = new mongoose.Schema({
    tarefa: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("Task", tarefaSchema)
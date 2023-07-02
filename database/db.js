const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@cluster0.qb74bpu.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => {
        console.log("MongDB Atlas connected...")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDb;
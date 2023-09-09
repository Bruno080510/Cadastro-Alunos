const mongoose = require('mongoose')

require("dotenv").config()
mongoose.set("strictQuery", true)

const connectToDb = async () => {
   await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xcvtpv2.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("MongDB Atlas conectado!!"))
    .catch((err) => console.log(err))
}

module.exports = connectToDb;
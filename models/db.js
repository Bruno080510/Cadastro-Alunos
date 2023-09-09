const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://brunoleal:bruno2005@cluster0.xcvtpv2.mongodb.net/?retryWrites=true&w=majority",
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
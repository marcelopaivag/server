const mongoose = require("mongoose")


const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://mongo:mongo@clusterreactapp.byfzvbk.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Base de datos conectada")

    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP POR COMPLETO

    }

}

module.exports = connectDB
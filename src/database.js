const mongoose = require('mongoose')

const connection = async() => {
    mongoose.set('strictQuery', true)
    const db = await mongoose.connect('mongodb://localhost/gallery', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('Connected to: ' + db.connection.name)
}

module.exports = connection;




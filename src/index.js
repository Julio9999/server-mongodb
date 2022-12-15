const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router  = require('./routes/index.routes.js')
const fileUpload = require('express-fileupload')
const connection = require('../src/database')
connection()



const app = express()
const PORT = 4000;

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : 'src/temp'
}));

app.use(router)


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
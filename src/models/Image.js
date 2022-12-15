const { Schema, model } = require('mongoose')

const ImageSchema = new Schema({
    title: 'string',
    key: 'string',
    url: {
        type: 'string',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Image', ImageSchema)
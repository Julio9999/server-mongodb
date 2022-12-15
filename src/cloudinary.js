const credentials  = require('./configuration')
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: credentials.cloud_name,
    api_key: credentials.api_key,
    api_secret: credentials.api_secret
})

const uploadImage = async(filePath) => {
    return await cloudinary.uploader.upload(filePath, {folder: 'practica', resource_type: 'image'});
}

const removeImage = async(id) => {
    return await cloudinary.uploader.destroy(id, {folder: 'practica'})
}

module.exports = { uploadImage, removeImage }

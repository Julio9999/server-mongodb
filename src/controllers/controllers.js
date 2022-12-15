const Image  = require('../models/Image')
const { uploadImage, removeImage } = require('../cloudinary')



const getImages = async(req, res) => {
    const images = await Image.find()
    return res.json(images);
}

const getImage = async(req, res) => {
    const image = await Image.findById(req.params.id)
    return res.json(image)
}

const deleteImage = async(req, res) => {
    const deletedImage = await Image.findByIdAndDelete(req.params.id)
    if (deletedImage  !== null){
        await removeImage(deletedImage.key)
        return res.json(deletedImage)
    }
    res.json({'message': 'image not found'})
}


const uploadImageDb = async (req, res) => {
    const { file } = req.files;

    const result = await uploadImage(file.tempFilePath)
    
    const imagen = new Image({url: result.secure_url, key: result.public_id, title: file.name})
    try {
        await imagen.save()
        return res.json({message: 'ok'})
        
    } catch (error) {
        return error;
    }
}

module.exports = {
    getImages,
    getImage,
    deleteImage,
    uploadImageDb
}
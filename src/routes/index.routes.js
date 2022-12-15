const { Router } = require('express')
const { getImages, getImage, deleteImage, uploadImageDb } = require('../controllers/controllers')


const router = Router()


router.get('/', getImages)

router.get('/:id', getImage)

router.post('/', uploadImageDb)


router.delete('/:id', deleteImage)

module.exports = router;
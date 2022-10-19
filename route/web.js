import multer from 'multer'
import express from 'express'
import MyController from '../controller/controller.js'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase();
        cb(null, fileName)
    }
});
const upload = multer({ storage: storage })

const router = express.Router()

router.get('/searchdata/:searchkey', MyController.search)
router.get('/', MyController.index)
router.get('/allproducts', MyController.getproduct)
router.get(`/:id`, MyController.deleteit)
router.post('/insertData',upload.single('avatar'),MyController.insert)


export default router  
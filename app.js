// importing require 

import cors from 'cors'
import express from 'express'
import db from './dbcon/datacon.js'
import router from './route/web.js'

// import multer from 'multer'

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../upload');
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase();
//         cb(null, fileName)
//     }
// });
// const upload = multer({ storage: storage })
// instance variables
const app = express()
const PORT = 5001
// route middelware


// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)


app.use(cors())

// mongoose.connect('mongodb://localhost:27017/bookapp')
db('mongodb://localhost:27017')

app.listen(PORT, () => {
    console.log("app is run")
})
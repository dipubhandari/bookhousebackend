// importing require 

import cors from 'cors'
import express from 'express'
import db from './db/dbCon.js'
import router from './routes/web.js'

const app = express()
const PORT = 5001



// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)


app.use(cors())

db('mongodb://localhost:27017')

app.listen(PORT, () => {
    console.log("app is runing")
})
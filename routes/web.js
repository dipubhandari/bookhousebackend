import express from 'express'
import Controller from "../controller/Controller.js";

const router = express.Router()
router.post('/login', Controller.Login)


router.post('/signup', Controller.Create)


export default router
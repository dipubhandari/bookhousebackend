import mongoose from 'mongoose'

const USER_SCHEMA = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String }
})


const USERMODEL_ACCOUNT = mongoose.model('book', USER_SCHEMA)

export default USERMODEL_ACCOUNT
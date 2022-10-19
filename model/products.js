import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
    desc: { type: String },
})


const ProductModel = mongoose.model('book', bookSchema)

export default ProductModel
import mongoose from "mongoose";

const ORDER_SCHEMA = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }

})

const ORDER_MODEL = mongoose.model('student', ORDER_SCHEMA)
export default ORDER_MODEL
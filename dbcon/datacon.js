import mongoose from 'mongoose'

const db = async (url) => {
    try {
        const DB_OPTIONS = {
            dbName: 'bookshop',
        }
        const r = await mongoose.connect(url, DB_OPTIONS);
        console.log("database connected")
        // 

    } catch (error) {
        console.log(error)
    }
}

export default db



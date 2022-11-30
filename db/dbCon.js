import { mongoose } from 'mongoose'

const db = async (DATABASE_URL) => {
    try {
        const db_OPTIONS = {
            dbName: 'AmazingKart'
        }
        await mongoose.connect(DATABASE_URL, db_OPTIONS)
       
    } catch (e) {

    }
}

export default db
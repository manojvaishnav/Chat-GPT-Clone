const mongoose = require('mongoose')
const colors = require('colors')

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to mongodb database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
const mongoose = require('mongoose')

const connectedToDb = async()=>{
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected to mongo db'))
        .catch((err)=>console.log('error in connecting to mongo db'))
}


module.exports = connectedToDb

const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
        Image:{
                type:String,
                required:true
        },
        Title:{
                type:String,
                required:true
        },
        Price:{
                type:Number,
                required:true
        }
})
module.exports = mongoose.model('menu',menuSchema)
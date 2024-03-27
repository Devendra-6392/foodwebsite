const mongoose = require('mongoose')
const imageSchema =  new mongoose.Schema({
        Images:{
                type:String,
                required:true,
                
        },
        title:{
                type:String,
                required:true
        }
},{timestamps:true})
module.exports = mongoose.model('food',imageSchema)
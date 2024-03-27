const mongoose = require('mongoose')
const offerSchema = new mongoose.Schema({
        Photo:{
                type:String,
                required:true
        },
        About:{
                type:String,
                
                trim:true
        },
        Offers:{
                type:String,
                required:true
        }
})

module.exports = mongoose.model('discount',offerSchema)
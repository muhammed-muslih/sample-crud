const mongoose = require('mongoose');
const {Schema} = mongoose

const product = new Schema({
    name:{
        required: true,
        type:String
    },
    description : {
        required: true,
        type:String
    },
    brand : {
        required: true,
        type:String
    },
    offers : {
        required: true,
        type : Number
    },
    price : {
        required: true,
        type: Number
    },
    // photo : String
},
{
    timeStamps: true
})
 module.exports =  mongoose.model('Product',product,'product')
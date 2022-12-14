const mongoose = require('mongoose')

let nominalSchema = mongoose.Schema({
    coinQuantity : {
        type : Number,
        default: 0
    },
    coinName : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    price : {
        type : Number,
        default: 0
    }
},{timeStamps:true})

module.exports = mongoose.model('Nominal', nominalSchema)

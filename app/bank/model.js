const mongoose = require('mongoose')

let bankSchema = mongoose.Schema({
    name : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    bankName : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    noRekening : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    }
}, {timeStamps:true})

module.exports = mongoose.model('Bank', bankSchema)

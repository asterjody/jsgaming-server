const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
    name : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    }
}, {timeStamps:true})

module.exports = mongoose.model('Category', categorySchema)

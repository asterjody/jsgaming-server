const mongoose = require('mongoose')

let usersSchema = mongoose.Schema({
    email : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    name : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    password : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    status : {
        type : String,
        enum: ['Y','N'],
        default: 'Y'
    },
    role : {
        type : String,
        enum: ['admin','user'],
        default: 'admin'
    },
    phoneNumber : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    
},{timeStamps:true})

module.exports = mongoose.model('Users', usersSchema)

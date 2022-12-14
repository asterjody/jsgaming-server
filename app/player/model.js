const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const HASH_ROUND = 10

let playerSchema = mongoose.Schema({
    email : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    name : {
        type : String,
        required: [true, 'Tidak Boleh Kosong'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },
    username : {
        type : String,
        required: [true, 'Tidak Boleh Kosong'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },
    password : {
        type : String,
        required: [true, 'Tidak Boleh Kosong'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },
    status : {
        type : String,
        enum: ['Y','N'],
        default: 'Y'
    },
    role : {
        type : String,
        enum: ['admin','user'],
        default: 'user'
    },
    avatar : { type : String },
    fileName : { type : String },
    phoneNumber : {
        type : Number,
        required: [true, 'Tidak Boleh Kosong'],
        maxlength: [13, 'Panjang Nama Harus Antara 9-13 Karakter'],
        minlength: [9, 'Panjang Nama Harus Antara 9-13 Karakter']
    },
    favorite : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'  
    },
    
},{timeStamps:true})

//validate same email
playerSchema.path('email').validate(async function(value){
    try {
        const count = await this.model('Player').countDocuments({email : value})
        return !count

    } catch (error) {
        throw err
    }
}, attr => `${attr.value} sudah terdaftar`)

//password encrypt
playerSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', playerSchema)

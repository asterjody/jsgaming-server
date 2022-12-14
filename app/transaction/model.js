const mongoose = require('mongoose')

let transactionSchema = mongoose.Schema({
    historyVoucherTopup : {
        gameName : { type: String, require: [true, 'Tidak Boleh Kosong']},
        category : { type: String, require: [true, 'Tidak Boleh Kosong']},
        thumbnail : { type: String},
        coinName : { type: String, require: [true, 'Tidak Boleh Kosong']},
        coinQuantity : { type: String, require: [true, 'Tidak Boleh Kosong']},
        price : { type: Number},
    },

    historyPayment : {
        name : { type: String, require: [true, 'Tidak Boleh Kosong']},
        type : { type: String, require: [true, 'Tidak Boleh Kosong']},
        bankName : { type: String, require: [true, 'Tidak Boleh Kosong']},
        noRekening : { type: String, require: [true, 'Tidak Boleh Kosong']},
    },

    name : {
        type : String,
        require: [true, 'Tidak Boleh Kosong'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter'],
    },

    accountUser : {
        type : String,
        require: [true, 'Tidak Boleh Kosong'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter'],
    },

    tax : {
        type : Number,
        default: 0
    },

    value : {
        type : Number,
        default: 0
    },

    status : {
        type : String,
        enum: ['pending','success','failed'],
        default: 'pending'
    },

    player : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },

    historyUser : {
        name : { type: String, require: [true, 'Tidak Boleh Kosong']},
        phoneNumber : {
            type : Number,
            require: [true, 'Tidak Boleh Kosong'],
            maxlength: [13, 'Panjang Harus Antara 9-13 Karakter'],
            minlength: [9, 'Panjang Harus Antara 9-13 Karakter'],
        }
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},{timestamps:true})

module.exports = mongoose.model('Transaction', transactionSchema)

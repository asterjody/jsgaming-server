const mongoose = require('mongoose')

let paymentSchema = mongoose.Schema({
    type : {
        type : String,
        required: [true, 'Tidak Boleh Kosong']
    },
    status : {
        type : String,
        enum: ['Y','N'],
        default: 'Y'
    },
    banks : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Bank'
    }]
},{timeStamps:true})


module.exports = mongoose.model('Payment', paymentSchema)

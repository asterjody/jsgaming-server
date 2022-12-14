const mongoose = require ('mongoose')
mongoose.set('strictQuery', true);
const {urlDb} = require ('../config')

mongoose.connect (urlDb, {
    useUnifiedTopology: true,

    useNewUrlParser: true
})

const db = mongoose.connection

module.exports = db
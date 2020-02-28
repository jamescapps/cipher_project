const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema (
    {
        message: [{
            iv: String,
            encryptedData: String,
            key: Object
        }],
        password: String,
        created_on: { type: Date, expires: 3600, default: Date.now() }
    }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
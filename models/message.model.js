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
        //Either deletes expired message when server starts running or a new message is added...
        created_on: { type: Date, expires: 3600, default: Date.now() }
    }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
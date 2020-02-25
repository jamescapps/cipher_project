const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema (
    {
        board: String,
        password: String,
        created_on: {type: Date, default: new Date()},
        thread:[
            {
                text: String,
                created_on: {type: Date, default: new Date()},
                bumped_on: {type: Date, default: new Date()},
                password: String,
                replies:[
                    {
                        text: String,
                        delete_password: String,
                        created_on: {type: Date, default: new Date()},
                        bumped_on: {type: Date, default: new Date()},
                    }
                ]
            }
            
        ]
    }
)

const Board = mongoose.model('Board', boardSchema)

module.exports = Board
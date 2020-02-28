require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet      = require('helmet')
const mongoose    = require('mongoose')
const app = express()

app.use(helmet())
app.use(helmet.noCache())
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(helmet.dnsPrefetchControl())
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
app.use(helmet.noSniff())
app.use(helmet.xssFilter())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"]
    }
}))
  
app.use(cors());
app.use(bodyParser.json())

mongoose.set('useCreateIndex', true)

//mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connect('mongodb://localhost/cipher_project', { useUnifiedTopology: true, useNewUrlParser: true }) 

//Test connection
mongoose.connection.once('open', () => {
  console.log("Connected to database!")
})

const createMessageRouter = require('./routes/create_message')
const decodeMessageRouter = require('./routes/decode_message')
const shareMessageRouter = require('./routes/share_message')

app.use('/create_message', createMessageRouter)
app.use('/decode_message', decodeMessageRouter)
app.use('/share_message', shareMessageRouter)

app.listen(process.env.PORT, function() {
    console.log("Server is running on Port: " + process.env.PORT)
})
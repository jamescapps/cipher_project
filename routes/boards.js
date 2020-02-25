const router = require('express').Router()
const bcrypt = require('bcrypt')
const Board = require('../models/board.model')

// Nodejs encryption with CTR
const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

encrypt = (text) => {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
 let encrypted = cipher.update(text)
 encrypted = Buffer.concat([encrypted, cipher.final()])
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
}

decrypt = (text) => {
 let iv = Buffer.from(text.iv, 'hex')
 let encryptedText = Buffer.from(text.encryptedData, 'hex')
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
 let decrypted = decipher.update(encryptedText)
 decrypted = Buffer.concat([decrypted, decipher.final()])
 return decrypted.toString()
}

var hw = encrypt("Some serious stuff")
console.log(hw)
console.log(decrypt(hw))

router.route('/test').get((req, res) => {
    res.send({hey: 'boards'})
})

router.route('/add').post((req, res) => {
    const { message } = req.body
    const { password1 } = req.body
    const { password2 } = req.body


   let encryptedMessage = encrypt(message)
    console.log(encryptedMessage)
    console.log(decrypt(encryptedMessage))

    /*if (password1 === password2 && password1 !== "" && password2 !== "") { 
        console.log("Passwords match")
        Board.findOne({board: boardName}, (err, result) => {
            if (!result) {
                const newBoard = new Board({
                    board: boardName,
                    password: password2,
                    created_on: new Date()
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newBoard.password, salt, (err, hash) => {
                        newBoard.password = hash
                        newBoard.save()
                            .then(() => res.json('Board added!'))
                            .catch(err => res.status(400).json('Error: ' + err))
                    })
                })

            }
            if (result) {
                res.json('Board all ready exists')
            }
        })
    } else {
        console.log("passwords don't match")
        res.json('Make sure passwords match.')
    }*/
})

module.exports = router
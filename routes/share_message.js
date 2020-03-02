require('dotenv').config()
const router = require('express').Router()
const nodemailer = require('nodemailer')

router.route('/share').post((req, res) => {
    const { result } = req.body
    const { email } = req.body
    const  { password2 } = req.body
    const { password3 } = req.body
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const transporter = nodemailer.createTransport({
        host: `${process.env.HOST}`,
        port: 465,
        secure: true, 
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}` 
        }
      })

    if (result !== 'Your encrypted message will show here.  It will self-destruct after 1 hour or after it has been viewed.') {
        if (result !== 'Please enter a message.') {
            if (emailValidate.test(email)) {
                if (password3 === '') {
                    let mailMessage = {
                        from: '"Cipher" <cipher@jamesjcapps.com>',
                        to: `${email}`,
                        subject: 'An encrypted message has been shared with you.',
                        text:
                        `You are receiving this email because someone has sent you an encrypted message.\n\n`
                        + `Please click on the following link and paste your message data in the decode box.\n\n`
                        + `${result}\n\n`
                        + `The message will self-destruct in 1 hour or after you have viewed it. \n\n`
                        + `The password will be sent to you in another form of communication. \n\n`
                        + `link to be determined\n\n`
                    }
                    transporter.sendMail(mailMessage, (err, res) => {
                        if (err) {
                            console.error('there was an error: ', err)
                        } 
                    })
                    res.json("Sending....")
                } else {
                    if (password3 === password2) {
                        let mailMessage = {
                            from: '"Cipher" <cipher@jamesjcapps.com>',
                            to: `${email}`,
                            subject: 'An encrypted message has been shared with you.',
                            text:
                            `You are receiving this email because someone has sent you an encrypted message.\n\n`
                            + `Please click on the following link and paste your message data in the decode box.\n\n`
                            + `${result}\n\n` 
                            + `The message will self-destruct in 1 hour or after you have viewed it. \n\n`
                            + `The password is ${password3}.\n\n`
                            + `link to be determined\n\n`
                        }
                        transporter.sendMail(mailMessage, (err, res) => {
                            if (err) {
                                console.error('there was an error: ', err)
                            } 
                        })
                        res.json("Sending....")
                    } else {
                        res.json('Your passwords do not match.')
                    }
                }
            } else {
                res.json('Please enter a valid email.')
            }
        } else {
            res.json('Please create a message.')
        }   
    } else {
        res.json('Please create a message.')
    }
    
})

module.exports = router
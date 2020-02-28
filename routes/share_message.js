require('dotenv').config()
const router = require('express').Router()
const nodemailer = require('nodemailer')

router.route('/share').post((req, res) => {
    const { result } = req.body
    const { email } = req.body
    const { password3 } = req.body

    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(result)
    console.log(email)
    console.log(password3)

    //Need to make sure passwords match if one is input.
    
    if (result !== 'Your encrypted message will show here.  It will self-destruct after 1 hour.') {
        if (result !== 'Please enter a message.') {
            if (emailValidate.test(email)) {
                res.json('success')
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
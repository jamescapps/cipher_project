const router = require('express').Router()

router.route('/test').get((req, res) => {
    res.send({hey: 'threads'})
})

module.exports = router
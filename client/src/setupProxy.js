const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    // Enables api to be used on Heroku
    app.use(proxy(['/create_message', '/decode_message', '/share_message' ], { target: 'http://localhost:4000' }))
}
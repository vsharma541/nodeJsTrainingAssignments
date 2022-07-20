let jwt = require('jsonwebtoken');

var validateCookie = (req, resp, next) => {
    let token = req.cookies.jwt;
    if(!token) {
        resp.redirect('/login');
        return;
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
        if(err) {
            resp.redirect('/login');
            return;
        }
        console.log(decodedToken);
        next();
    })
}

module.exports = validateCookie;
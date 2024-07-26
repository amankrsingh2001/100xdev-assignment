const secret = require('../secret')
//cons Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split('');
    const jwtToken = words[1]; 
    const decodedValue = jwt.verify(jwtToken,secret);
    if(decodedValue.username){
        next()
    }else{
        res.status(401).json({msg:"Unauthorized"})
    }
}

module.exports = adminMiddleware;
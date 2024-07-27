const { JWT_SECRET } = require("../secret");
const Jwt = require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1]; 
    const decodedValue = Jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
        req.authorization = decodedValue;
        next()
    }else{
        res.status(401).json({msg:"Unauthorized"})
    }
}

module.exports = userMiddleware;
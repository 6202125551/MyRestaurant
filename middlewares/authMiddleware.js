const JWT = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {

        const token = req.headers['authorization'].split(' ')[1]
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(401).json({
                    status:"failed",
                    message:"un-authorised user"
                })
            }else {
                req.body.id = decode.id
                next()
            }

        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:false,
            msg: "Error in auth API",
            error
        })
    }
}
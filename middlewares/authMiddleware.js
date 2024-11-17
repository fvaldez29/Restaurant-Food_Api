import jwt from 'jsonwebtoken'

export default async(req, res, next) => {
    try {
        // get token
        // * El token extrae del encabezado Authorization de la solicitud 
        const token = req.headers['authorization'].split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(401).send({
                    success: false,
                    message: 'Invalid Credentials'
                })
            } else {
                req.body.id = decode.id;
                next()
            }
        })

        
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: 'Please add a valid token'
        })
    }
}
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const ensureAuthorization = (req)=>{
    try{
        let receivedJWT = req.headers["authorization"];
        console.log("received jwt : ", receivedJWT);

        if(receivedJWT){
            let decodedJWT = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
            console.log(decodedJWT);
    
            return decodedJWT;
        }else{
            throw new ReferenceError("jwt must be provided");
        } 
    }catch(err){
        console.log(err.name);
        console.log(err.message);

        return err;
    }
}

module.exports = ensureAuthorization;
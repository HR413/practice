const jwt = require('jsonwebtoken');


const createaToken= jwt.sign(payload,process.env.PRIVATE_KEY,(err,token)=>{
    if(err){
        console.error("INVALID:",err.message)
    }
    else{
        console.log(token);
    }
})

const validToken= jwt.verify(token,process.env.PRIVATE_KEY);

jwt.verify(token, process.env.PRIVATE_KEY, function(err,decoded){
    console.log(decoded.foo)
})

try{
    var decoded = jwt.verify(token, 'wrong-secret');
} catch(err){
    console.log("token verification failed ", err.message);
}
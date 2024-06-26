import jwt  from 'jsonwebtoken';
import userModel from '../../DB/models/user.model.js';

export const auth = async (req,res,next)=>{
    const {authorization} = req.headers;
    
    if(!authorization.startsWith(process.env.BEARERKEY)){
        return res.json({message:"invaild authorization"})
    }
    const token = authorization.split(process.env.BEARERKEY)[1];
    const decoded = await jwt.verify (token, process.env.LOGINSIG);
    const authUser = await userModel.findById(decoded._id);

    if(!authUser){
        return res.json({message:"user not found"});
    }
    req.user = authUser;
    next();
} 

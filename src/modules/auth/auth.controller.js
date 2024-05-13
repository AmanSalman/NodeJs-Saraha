import bcrypt from 'bcryptjs';
import userModel from '../../../DB/models/user.model.js';
import  jwt  from 'jsonwebtoken';
import SendEmail from '../../services/SendEmail.js';
  
  
  export const signup = async (req,res)=>{
    const {name,email,password} = req.body;
    const user = await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:'email already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
    const newUser = await userModel.create({name,email,password:hashedPassword});
    if(!newUser){
        return res.json({message:"error while creating user"});
    }

    const token = await jwt.sign({email}, process.env.CONFIRMEMAILSIGN,{expiresIn:60*5});
    const Refreshtoken = await jwt.sign({email}, process.env.CONFIRMEMAILSIGN, {expiresIn:60*60*24*30});

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="text-align: center; color: #333333;">Confirm Your Email Address</h2>
            <p style="color: #555555;">Thank you for signing up! Please confirm your email address by clicking the button below:</p>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}" style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Confirm Email</a>
                <a href="${req.protocol}://${req.headers.host}/auth/confirmEmail/${Refreshtoken}" style="background-color: #007bfo; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Resend Confirm Email</a>
            </div>
    
            <p style="color: #555555; margin-top: 30px;">If you didn't create an account, you can safely ignore this email.</p>
        </div>
    
    </body>
    </html>
    `;

    await SendEmail(email, `Welcome to saraha`, html);

    return res.status(201).json({message:"success", newUser});
  };


  export const signin = async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email}).select('name password confirmEmail');
    if(!user){
        return res.json({message:'invaild data'});
    }

    if(!user.confirmEmail){
        return res.json({message:"please confirm your email"})
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        return res.json({message:'invaild data'});
    }
    const token = jwt.sign({_id:user._id}, process.env.LOGINSIG);
    return res.json({message:'success', token});
  }


  export const confirmEmail = async (req,res)=>{
    const {token} = req.params;
    const decoded = jwt.verify(token, process.env.CONFIRMEMAILSIGN);
    const user = await userModel.updateOne({email:decoded.email}, {confirmEmail:true}, {new:true});
    if(user.modifiedCount > 0 ){
        return res.redirect(process.env.FrontEndURL )
    }
   // return res.json({message:"success", user});
  }

  

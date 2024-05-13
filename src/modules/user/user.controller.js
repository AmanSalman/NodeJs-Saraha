import userModel from "../../../DB/models/user.model.js"

export const Profile = async (req,res)=>{

    const user = await userModel.findById(req.user._id);
    return res.json({message:"success",user})
}
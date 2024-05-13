export const asyncHandler = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((err)=>{
            return res.json({message:"catch error",error:err.stack})
        })
    }
}
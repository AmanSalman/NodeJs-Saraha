import Joi from "joi";

export const signupSchema = {
    body:Joi.object({
    name:Joi.string().min(2).max(20).alphanum().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(20).required(),
    cPassword:Joi.valid(Joi.ref('password')).required(),
    gender:Joi.string().alphanum().valid('female', 'male')
})
}



export const signinSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(20).required(),
});
const dataMethods = ['body', 'query', 'params'];
export const validation = (schema)=>{
    return (req,res,next)=>{

        const validationArray = [];
        dataMethods.forEach(key=>{
            if(schema[key]){
                const validatationRes = schema[key].validate(req[key],{abortEarly:false});
            if(validatationRes.error){
                validationArray.push(validatationRes.error);
            }
            }
        })

        if(validationArray.length > 0){
            return res.status(400).json({message:"validation error", validationArray});
        }
        next();
        // old ver
        // const validationArray = [];
        // if(schema.body){
        //     const validatebody = schema.body.validate(req.body,{abortEarly:false});
        //     if(validatebody.error){
        //         validationArray.push(validatebody.error);
        //     }
        // }

        // if(schema.query){
        //     const validateQuery = schema.query.validate(req.query,{abortEarly:false});
        //     if(validateQuery.error){
        //         validationArray.push(validateQuery.error);
        //     }
        // }

        // if(schema.params){
        //     const validateparams = schema.params.validate(req.params,{abortEarly:false});
        //     if(validateparams.error){
        //         validationArray.push(validateparams.error);
        //     }
        // }

        // if(schema.headers){
        //     const validateheaders = schema.headers.validate(req.headers,{abortEarly:false});
        //     if(validateheaders.error){
        //         validationArray.push(validateheaders.error);
        //     }
        // }

        // if(validationArray.length>0){
        //     return res.status(400).json({message:"validation error", validationArray});
        // }


        // next();
    }
}

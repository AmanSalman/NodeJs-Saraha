import userRouter from './modules/user/user.router.js';
import authRouter from './modules/auth/auth.router.js';
import MessageRouter from './modules/message/message.router.js'; 


export const Appinit = (app, express)=> {
    
    app.use(express.json());
    app.get('/', (req,res)=>{
        
        return res.json ({message:"welcome"});
    })
    app.use('/user', userRouter);
    app.use('/auth', authRouter);
    app.use('/message', MessageRouter)
    app.use('*', (req,res)=>{
        return res.json({message:"page not found"});
    })
};
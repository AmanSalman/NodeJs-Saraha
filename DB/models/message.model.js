import { Schema, Types } from 'mongoose';
import { model } from 'mongoose';


const MessageSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    receiverId :{
        type:Types.ObjectId,
        required:true,
    }
},{
    timestamps:true
});

const messageModel = model('Message', MessageSchema);
export default messageModel;
import mongoose from "mongoose";

const {Schema}=mongoose;

const Userschema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
        
    },
}, {timestamps: true});

const Usermodel= mongoose.models.User || mongoose.model('User',Userschema)
export default Usermodel
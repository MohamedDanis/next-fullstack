// import mongoose from "mongoose";
const mongoose = require("mongoose");

const {Schema}=mongoose;

const Postschema = new Schema({
    title: {
        type: String,
        required: true,
        
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports=mongoose.models.Post || mongoose.model("Post", Postschema);
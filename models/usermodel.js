const mongoose = require("mongoose");
const generate = require("../helpers/generate");
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
    image: String,
    age: Number,
    maidenName: String,
    phone: String,
    position: String,
    username:String,
    statusOnline: String,
    
    deleted: {
        type: Boolean,
        default: false
    },
    deleteAt: Date
}, { timestamps: true });

userSchema.index({ fullName: "text" ,email:"text"});
const User = mongoose.model("user", userSchema, "user");


module.exports = User; 
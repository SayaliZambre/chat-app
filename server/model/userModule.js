const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min: 20,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        require: true,
        max: 8,
    },
    isAvatarImageSet : {
        type: Boolean,
        default: false,
    },
    avtarImage: {
        type: String,
        default: "",
    },
});
 
module.exports = mongoose.model("User",userSchema);

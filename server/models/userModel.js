const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    mobile:{
        type:Number,
        required:true
    },

    collegeName:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    },

    district:{
        type:String,
        required:true
    },

    course:{
        type:String,
        required:true
    },

    year:{
        type:String,
        required:true
    },

    enrolledInEvents:[
        {
            type:Array,
            ref:"eventModel"
        }
    ]
})

module.exports = mongoose.model('userModel',userSchema);
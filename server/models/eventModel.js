const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({

    eventName:{
        type:String,
        required:true
    },

    payment:{
        type:Boolean,
        default:false
    }
   
})

module.exports = mongoose.model('eventModel',eventSchema);
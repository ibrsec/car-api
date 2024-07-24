


const mongoose = require('mongoose');

const CarScheama = new mongoose.Schema({
    make:{
        type:String,
        trim: true,
        maxLength:50,
        required:true,

    },
    model:{
        type:String,
        trim: true,
        maxLength:50,
        required:true,
    },
    year:{
        type:Number,
        required:[true, "year is required field!"],
        min:[1950, "Year cant be less than 1950!"],
        max:[new Date().getFullYear(), "Year cant be graster than current year!"],
    },
    color:{
        type:String,
        trim:true,
        required:true,

    },
    status:{

    },
    seat:{

    }
},{
    collection:"cars",
    timestamps:true
})




module.exports.Car = mongoose.model('Car',CarScheama);
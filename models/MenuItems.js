const mongoose = require("mongoose");

// define person schema
const menuSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
    type : Number,
    },
    taste : {
      type : String,
      enum : ['sweet' , 'spicy' , 'sour'],
      required : true
    },
    is_drink :{
        type : Boolean,
        default : false
    },
    ingredients:{
        type : [String],
        default : []
    },
    num_sales : {
        type : Number,
        default :  0,
    }
});

const MenuItems = mongoose.model('MenuItems' , menuSchema);
module.exports = MenuItems;
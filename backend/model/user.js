const mongoose=require('mongoose')

var UserSchema= new mongoose.Schema({

    name:String,
    password:String,
    email:String,
    location:String,
        date:{
            type:Date,
            default:Date.now
        }
  
   

})

  var Userdb=mongoose.model('UserDB',UserSchema)

  module.exports=Userdb
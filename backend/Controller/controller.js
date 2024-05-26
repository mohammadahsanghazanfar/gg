const Userdb=require('../model/user')
const Orderdb=require('../model/order')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose')


const jwtSecret='MynameisAhsan#'


exports.create = async (req, res) => {
    
  
  const salt=await bcrypt.genSalt(10);
  const  secPassword=await bcrypt.hash(req.body.password,salt)
  
  try {
     
  
  
      // Create a new Animal instance
      const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        password:secPassword,
        location:req.body.location
        
      });
  
      // Save the Animal instance to MongoDB
      const savedUser = await user.save(); 
      res.json({success:true})
  

      console.log("Data saved:", savedUser);
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).send(error);
    }
    
   
  };

  exports.findOne=async(req,res)=>{

    let email=req.body.email

    try{
         let userData=  await Userdb.findOne({email})
         if(!userData.email){
          return res.status(400).json({error:"Try logging with valid Credentials"})
         }
         const pwd =await bcrypt.compare(req.body.password,userData.password)
         if(!pwd){
          return res.status(400).json({error:"Try logging with valid Credentials"})
         }

         const data={
          user:{
         id:userData.id
          }
         }
         const authToken= jwt.sign(data,jwtSecret)

         return res.json({success:true ,authToken:authToken})  // this is main returning to frontend
    }
    catch(error){
      console.error("Error saving data:", error);
      res.status(500).send(error);
    }
  }
  exports.find = async (req, res) => {
    try {
        const fetched_data = await mongoose.connection.db.collection("gofood");
        const dataArray = await fetched_data.find({}).toArray();
        res.json({success:true ,dataArray: dataArray})
        console.log(dataArray)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.order1 = async (req, res) => {
  let data = req.body.order_data;
  let email = req.body.email;
  
  // Add order_date to the beginning of the data array
  data.unshift({ order_date: req.body.order_date });

  try {
      // Use findOneAndUpdate directly to either create or update the order
      await Orderdb.findOneAndUpdate(
          { email },
          { $push: { order_data: { $each: data } } }, // Use $each to push multiple elements
          { upsert: true } // Creates the document if it doesn't exist
      );
      
      res.json({ success: true });
      console.log("Order saved/updated successfully.");
  } catch (err) {
      console.error("Error in order function:", err);
      res.status(500).json({ error: err.message });
  }
};

const mongoose=require('mongoose')

const connectDB= async()=>{

        try{

        const con= await mongoose.connect("mongodb+srv://ahsan:aheeba123@cluster0.w28eg7g.mongodb.net/food")
       console.log(`MongoDB connected `)
     return con
}
catch(err){
        console.log(err)
        process.exit(1)
}

          
}

module.exports=connectDB
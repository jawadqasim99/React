const User = require("../models/user")
const {hashPassword,comparePassword} = require('../helper/auth')

const test =(req,res)=>{
  
  
  
    res.json("All working correct")

    
}

//// For Registration controlller

const registerUser= async(req,res)=>{
try {
    const {name, email ,password} = req.body;
    // checks if name was entered

    if(!name){
        return res.json({
            error:"Name is required"
        })

    }
     // check email
    const exist = await User.findOne({email});
    if(exist || !email){
        return res.json({
            error : "Email is taken already"
        })
    }
    //checks if password is good
    if(!password || password.length < 6){
        return res.json({
            error:"Password is required and should be at least 6 characterss long"
        })
    }
   
   const hashedPass= await hashPassword(password);

    const user = await User.create({
        name,email,password:hashedPass
    })
    return res.json(user)
} catch (error) {
    console.log(error);
    
}
}



// for logincontroller

let loginUser = async(req,res)=>{
   
    try {
        const {email,password} = req.body;
       const user = await User.findOne({email});
       if(!user){
        return res.json({
            error:"User not Found"
        })
       }

       //check if password match
       const match = await comparePassword(password,user.password);
       if(match){
        res.json("Password match");
       }
       if(!match){
        res.json({
            error:'password not match'
        })
       }

    } catch (error) {
        res.json(error)
    }
}



module.exports={test,registerUser,loginUser}
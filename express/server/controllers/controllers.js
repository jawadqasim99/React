const User = require("../models/user")

const test =(req,res)=>{
  
  
  
    res.json("All working correct")

}
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
   
   

    const user = await User.create({
        name,email,password
    })
    return res.json(user)
} catch (error) {
    console.log(error);
    
}
}

module.exports={test,registerUser}
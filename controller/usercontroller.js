const user=require('../model/usermodel')
const jwt=require('jsonwebtoken')

exports.userregister=async(req,res)=>{
    try{
        const {username,password,email}=req.body

        const existinguser= await user.findOne({email})
        if(existinguser){
            res.status(406).json("User Already Exits")
    
        
        }
        else{
            const newuser= new user({
                username,password,email
            })
            await newuser.save()
            res.status(200).json(newuser)
        }

    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
   

}

exports.userlogin=async(req,res)=>{
    const {email,username,password}=req.body
    const existinguer= await user.findOne({email,password})
    if(existinguer){
        const token =jwt.sign({userId:existinguer._id},process.env.SECRET_KEY)
        res.status(200).json({existinguer,token})
    }
    else{
        res.status(406).json("Invalid Email/Password")
    }
}
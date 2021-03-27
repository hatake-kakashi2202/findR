
import  express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
const handleErrors=(err)=>{
console.log(err.message,err.code);
let errors={name:'',email:'',person:'',password:''};
if (err.code===11000)
{
    errors.email="That email is already registered";
    return errors;
}
 
if(error.message=== "Incorrect email")
{
error.email="Incorrect email"
}

if(error.message=== "Incorrect password")
{
error.email="Incorrect password"
}
if(err.message.includes('user validation failed'))
{
   Object.values(err.errors).forEach(error=>{
      errors[error.properties.path]=error.properties.message;

   })
}

return errors;
}
const maxAge=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},'Eadgroup0120202021',{
        expiresIn:maxAge
    });
}

const router=express.Router();

router.post('/signup',async (req,res)=>{
const {name,email,person,password}=req.body;
try{
    const user=await User.create({name,email,person,password});
    const token=createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
    res.status(201).json({name:user.name});
}
catch(err)
{
   const errors= handleErrors(err);
   res.status(400).json({errors});
    
}
});
router.post('/login',async (req,res)=>{
    const {name,password}=req.body;
    try{
    const user = await User.login(name,password);
    const token=createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});

    res.status(200).json({id:user._id,token:token});

    }
    catch(err)
    {
        const errors=handleErrors(err);
res.status(400).json({errors});
    }
    })


router.get('/:id',asyncHandler(async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(user)
    {
    res.json(user);
    }
    else{
        res.send("No such user");
    }
}))

export default router
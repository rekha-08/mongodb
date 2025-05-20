const exp=require("express");
const app=exp();
const mongoose=require('mongoose');
const User = require("./userModel");
app.use(exp.json());
try{

    mongoose.connect("mongodb://localhost:27017/logdb")
}
catch(error){
    console.log(error)
}
app.get("/login",async(req,res)=>{
    const user=await
    user.findone(req.body);
    if(!user){
        return res.send("no user found");
    }
    return res.json(user);
})
app.post('/register', (req, res)=>{
    try{
        const user = new User(req.body);
        user.save();
        res.send("Data stored")
    }
    catch(error){
        res.send("Failed:"+error)
    }
})
app.listen(5000, ()=>{
    console.log("The port is working");
    
})
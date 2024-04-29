const user=require("./models.js")


exports.getUsers=async(req,res)=>{
    try {
        const data = await user.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
   
}
exports.createUsers=(req,res)=>{

    let newUser=new user(req.body);
    newUser.save(req,res);
}
exports.deleteUsers=async(req,res)=>{
    console.log(req.body);
    try{
         const r=await user.findOneAndDelete({userName:req.body.username, password:req.body.password});
        console.log(r);
        
        if(r==null){return res.status(200).send("User Not found")
     ;}
        else{return res.status(200).send("User deleted");}
    }
    catch (err) {console.error(err);}


}

exports.updateUsers=async(req,res)=>
{
    console.log(req.body)
    try{

        await user.findOneAndUpdate({userName:req.body.username,password:req.body.password},{$set:{userName:req.body.new_username,password:req.body.new_password,mob:req.body.new_mob,location:req.body.new_location},function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        }})
        console.log("user sucessfully updated")
    }
    catch(err){console.log(err)}


}
exports.getUser=async(req,res)=>{
    console.log(req.body.username)
    try {
        const data = await user.findOne({userName:req.body.username,password:req.body.password});
       res.json(data)
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
   
}
exports.getUser1=async(req,res)=>{
    console.log("skhs"+req.params.name)
    try {
        const data = await user.findOne({userName:req.params.name });
        console.log(data)
       res.json(data)
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
   
}
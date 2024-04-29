const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const auth =new Schema(
    {
        userName:{
            type: 'string',
            unique: true,
            required: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        mob:{
            type:"number",
            // unique: true,
           
            required: true

        },
        location: {
            type:"string",
            required: true

        }
    }
)
module.exports =mongoose.model("Authentication",auth)
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link} from "react-router-dom"
export const CreateUser = () => {
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const [loc,setLoc]=useState("");
    const [mob,setMob]=useState("");
    function handle(){
     
        const res= axios.post("http://localhost:4000/create",{userName:name,password:pass,mob:mob,location:loc})
        console.log(res.data)
    }
    
  return (
    <div>
         <div style={{display:"flex",boxShadow:"1px 1px grey",position:"fixed",width:"100%",backgroundColor:"white"}}>
       <div style={{width:"5%",margin:"20px",justifyContent:"flex-start"}}>
       <Link to={"/"}>
       <AiOutlineArrowLeft  size={30}/>
       </Link>
       </div>
        <div style={{display:"flex",width:"90%",justifyContent:"center"}}>
        <h2 style={{textAlign:"center",marginLeft:"60px"}} >Create Page</h2>
        <AiOutlinePlus style={{margin:"25px"}} size={30}/>
        </div>
      </div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"200px"}}>
        <div style={{display:"flex",flexDirection:"column",padding:"10px 20px",border:"1px solid grey",paddingBottom:"30px"}}>
            <h3>Create New User</h3>
            <input value={name} onChange={(e)=>setName(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='text' placeholder='Enter Your username'/>
            <input value={mob} onChange={(e)=>setMob(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='text' placeholder='Enter Your Mobile number'/>
            <input value={loc} onChange={(e)=>setLoc(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='text' placeholder='Enter Your Location'/>
           
            <input value={pass} onChange={(e)=>setPass(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='password' placeholder='Enter your password'/>
            
                <button style={{height:"40px",background:"black",color:"white"}} onClick={handle}>
                    Create
                </button>
        
        </div>
    </div>
    </div>
  )
}

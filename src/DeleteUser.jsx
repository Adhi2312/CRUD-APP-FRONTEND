import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link} from "react-router-dom"

export const DeleteUser = () => {
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const[ok,setOk]=useState("");
    const[ok1,setOk1]=useState(false);
    const handle=async()=>{
     
        const res= await axios.post("http://localhost:4000/delete",{username:name,password:pass})
        console.log(res.data)
        if(res.data==="User Not found")
        {
            setOk("user not found");
            setOk1(true)
            setPass("")
            setName("")
        }
        else if(res.data==="User deleted"){
            setOk("User deleted");
            setOk1(true)
            setPass("")
            setName("")
        }
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
        <h2 style={{textAlign:"center",marginLeft:"60px"}} >Delete</h2>
        <RiDeleteBin5Line style={{margin:"25px"}} size={30}/>
        </div>
      </div>
        
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"200px"}}>
        <div style={{display:"flex",flexDirection:"column",padding:"10px 30px",border:"1px solid grey",paddingBottom:"30px"}}>
            <h3>Delete User</h3>
            <p className={!(ok1)?"in1":"in2"} >{ok}</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='text' placeholder='Enter Your username'/>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} style={{width:"280px",padding:"10px 20px",marginBottom:"20px"}} type='password' placeholder='Enter your password'/>
            <div >
                <button  style={{padding:"10px 30px",backgroundColor:"white",color:"black",marginRight:"10px",marginLeft:"110px"}}>
                    Cancel
                </button>
                <button style={{padding:"10px 30px",backgroundColor:"black",color:"white"}} onClick={handle}>
                    Delete
                </button>
            </div>
        </div>
    </div>
   
    </div>

  )
}

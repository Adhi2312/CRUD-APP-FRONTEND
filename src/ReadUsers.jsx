import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link} from "react-router-dom"

const url="http://localhost:4000"

export const ReadUsers = () => {
    const [data,setData]=useState([]);
    
    const fet =async()=>{
        const res=await fetch(url+"/create")
        const jsondata=await res.json();
        setData(jsondata)
    }
   useEffect(()=>{fet()},[])    
    console.log(data)
  return (
    <div>
       <div style={{display:"flex",boxShadow:"1px 1px grey",position:"fixed",width:"100%",backgroundColor:"white"}}>
       <div style={{width:"5%",margin:"20px",justifyContent:"flex-start"}}>
       <Link to={"/"}>
       <AiOutlineArrowLeft  size={30}/>
       </Link>
       </div>
        <div style={{display:"flex",width:"90%",justifyContent:"center"}}>
        <h2 style={{textAlign:"center",marginLeft:"60px"}} >Users Details</h2>
        <AiOutlineRead style={{margin:"25px"}} size={30}/>
        </div>
      </div>
    <div style={{backgroundColor:"white",display:"flex",flexDirection:"coloumn",justifyContent:"center",paddingTop:"50px"}}>
        
       
    <div style={{paddingTop:"100px"}}>
      
        <table style={{border:"1px solid grey"}}>

            <thead>
                <tr style={{backgroundColor:"#f77f00"}}>
             {/* <th style={{padding:"30px 80px"}}>S.No</th> */}
                    <th style={{padding:"30px 80px"}}>Username</th>
                    <th style={{padding:"10px 80px"}}>password</th>
                    <th style={{padding:"10px 80px"}}>Mobile No</th>
                    <th style={{padding:"10px 80px"}}>Location</th>
                    
                </tr>
                
            </thead>
            <tbody>
      {data.map((data,index)=>{
           return( 
            <tr >
               
               <td style={{textAlign:"left",padding:"30px"}}>{data.userName}</td>
               
               <td>{data.password}</td>
               <td>{data.mob}</td>
               <td>{data.location}</td>

               </tr>           )
        })
      }
      </tbody>
      </table>
      
      </div>
    </div>
    </div>
  )
}

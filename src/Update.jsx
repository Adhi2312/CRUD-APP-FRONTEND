import React, { useState } from 'react';
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link} from "react-router-dom"
export const Update = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [n_u, setN_u] = useState("");
  const [n_p, setN_p] = useState("");
  const [mob, setMob] = useState("");
  const [loc, setLoc] = useState("");

  const handle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/getUser", { username: user, password: pass });
      if (res.data === null) {
        // Display error message if user is not found
        document.getElementById("cred").innerHTML = "Check username or password";
      } else {
        // Call the update API using state variables
        const res2 = await axios.post("http://localhost:4000/update", {
          username: user,
          password: pass,
          new_username: n_u,
          new_password: n_p,
          new_mob: mob,
          new_location: loc
        });
        // Log user after successful update
        console.log(user);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
       <div style={{display:"flex",boxShadow:"1px 1px grey",position:"fixed",width:"100%",backgroundColor:"white"}}>
       <div style={{width:"5%",margin:"20px",justifyContent:"flex-start"}}>
       <Link to={"/"}>
       <AiOutlineArrowLeft  size={30}/>
       </Link>
       </div>
        <div style={{display:"flex",width:"90%",justifyContent:"center"}}>
        <h2 style={{textAlign:"center",marginLeft:"60px"}} >Update User</h2>
        <MdOutlineUpdate style={{margin:"25px"}} size={30}/>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "190px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", padding: "30px 40px" }}>
          <h4>Enter Username and password to Update</h4>
          <p style={{ margin: "0px", textAlign: "end", marginLeft: "-210px", fontSize: "13px", color: "red" }} id='cred'></p>
          <div>
            <input id='user' value={user} onChange={(e) => setUser(e.target.value)} style={{ padding: "10px 10px 10px 12px", margin: "10px 0px", textAlign: "left  ", width: "200px" }} type="text" placeholder='Enter your Username' />
            <input id='n_u' value={n_u} onChange={(e) => setN_u(e.target.value)} style={{ padding: "10px 10px 10px 12px", margin: "10px 10px", textAlign: "left  ", width: "200px" }} type="text" placeholder='Enter your new User Name' />
          </div>
          <div>
            <input id='pass' value={pass} onChange={(e) => setPass(e.target.value)} style={{ padding: "10px 10px 10px 12px", margin: "10px 0px", textAlign: "left  ", width: "200px" }} type="password" placeholder='Enter your Password' />
            <input id='n_p' value={n_p} onChange={(e) => setN_p(e.target.value)} style={{ padding: "10px 10px 10px 12px", margin: "10px 10px", textAlign: "left  ", width: "200px" }} type="password" placeholder='Enter your new Password' />
          </div>
          <input id='loc' value={loc} onChange={(e) => setLoc(e.target.value)} placeholder='Enter your location' style={{ padding: "10px 10px 10px 12px", margin: "10px 0px", marginLeft: "-10px", textAlign: "left  ", width: "435px" }} />
          <input id='mob' value={mob} onChange={(e) => setMob(e.target.value)} placeholder='Enter your Mobile no' style={{ padding: "10px 10px 10px 12px", margin: "10px 0px", marginLeft: "-10px", textAlign: "left  ", width: "435px" }} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={{ padding: "13px 60px", margin: "10px 0px", backgroundColor: "white", color: "black", marginRight: "10px", marginLeft: "120px" }} >Cancel</button>
            <button style={{ padding: "13px 60px", margin: "10px 0px", backgroundColor: "black", color: "white" }} type="button" onClick={handle}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

import logo from './logo.svg';
import './App.css';
import { ReadUsers } from './ReadUsers';
import { Update } from './Update';
import {Link, Outlet, Route, Routes} from "react-router-dom"
import { DeleteUser } from './DeleteUser';
import { CreateUser } from './CreateUser';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/read" element={<ReadUsers/>}/>

        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<DeleteUser/>}/>
        <Route path='/create' element={<CreateUser/>}/>
      </Routes>
      
    </div>
  );
}

export const IndexPage=()=>{
  return(
    <div>
      <div style={{display:"flex",justifyContent:"center",boxShadow:"1px 1px grey",position:"fixed",width:"100%"}}>
        <h2 style={{textAlign:"center",marginLeft:"60px"}} >Home Page</h2>
        <AiFillHome style={{margin:"20px"}} size={30}/>

      </div>
    <div style={{display:"flex",flexDirection:"column",padding:"200px"}}>
    <Link to={"/create"}>
      <button style={{width:"300px",borderRadius:"50px",border:"1px solid grey",backgroundColor:"white",marginBottom:"20px"}}>
        <div style={{display:"flex",width:"100%"}}>
        <p style={{width:"80%",textAlign:"left",marginLeft:"30px"}}>Create User</p>
        <AiOutlinePlus size={25} style={{margin:"10px 15px"}}/>
        </div>
      </button>
      </Link>
      <Link to={"/read"}>
      <button style={{width:"300px",borderRadius:"50px",border:"1px solid grey",backgroundColor:"white",marginBottom:"20px"}}>
        <div style={{display:"flex",width:"100%"}}>
        <p style={{width:"80%",textAlign:"left",marginLeft:"30px"}}>Read All Users</p>
        <AiOutlineRead size={25} style={{margin:"10px 15px"}}/>
        </div>
      </button>
      </Link>
      <Link to={"/update"}>
      <button style={{width:"300px",borderRadius:"50px",border:"1px solid grey",backgroundColor:"white",marginBottom:"20px"}}>
        <div style={{display:"flex",width:"100%"}}>
        <p style={{width:"80%",textAlign:"left",marginLeft:"30px"}}>Update Users</p>
        <MdOutlineUpdate size={25} style={{margin:"10px 15px"}}/>
        </div>
      </button>
      </Link>
      <Link to={"/delete"}>
      <button style={{width:"300px",borderRadius:"50px",border:"1px solid grey",backgroundColor:"white",marginBottom:"20px"}}>
        <div style={{display:"flex",width:"100%"}}>
        <p style={{width:"80%",textAlign:"left",marginLeft:"30px"}}>Delete Users</p>
        <RiDeleteBin5Line size={25} style={{margin:"10px 15px"}}/>
        </div>
      </button>
      </Link>
    </div>
    </div>
  )
} 
export default App;

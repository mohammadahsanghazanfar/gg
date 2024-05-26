import React from 'react'
import { Link , useNavigate } from "react-router-dom";
import './navbar.css'
import HeaderButton from './HeaderButton';

export default function Navbar(props) {

  const navigate=useNavigate();

   const handlelogout=()=>{
         localStorage.removeItem("authToken")
         navigate("/login")
   }

  return (
    
    <div  id='nav'>

      <h3>Ahsan'Food</h3>
     
     <div className='links'>
      <Link to="/" className='nav-link' >Home</Link>
      { localStorage.getItem("authToken") &&  <Link to="/myorders" className='nav-link' >Myorder</Link> }
      { !localStorage.getItem("authToken") && <Link to="/login" className='nav-link-cred-1'>login</Link>}
      { !localStorage.getItem("authToken") && <Link to="/createUser" className='nav-link-cred-2'>Signup</Link> }
      { localStorage.getItem("authToken") && <div  className='nav-link-cred-2' onClick={handlelogout}>logout</ div> }
      
      </div>

        <HeaderButton click={props.enabled} arr2={props.arr} ></HeaderButton>

    </div>

    
    
  );
}

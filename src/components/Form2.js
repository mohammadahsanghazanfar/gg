import React,{useState} from 'react';
import './Form.css'

function Form2() {

    const [credentials,setCredentials]=useState({name:"",email:"",password:"",location:""})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/createUser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
        })

        const json= await response.json()
        if(!json.success){
          alert("Enter valid credentials")
        }
        else{
          alert("Your data is submitted successfully")
        }
        setCredentials({})

    }


    const changeEvent=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label><br />
        <input type="text" className="w-100 form-input" name='name' value={credentials.name} onChange={changeEvent}/><br />

        <label htmlFor="Specie">Email</label><br />
        <input type="text" className="w-100 form-input" name='email' value={credentials.email} onChange={changeEvent}/><br />

        <label htmlFor="Age">Password</label><br />
        <input type="text" className="w-100 form-input"  name='password' value={credentials.password} onChange={changeEvent}/><br />

        <label htmlFor="Age">Location</label><br />
        <input type="text" className="w-100 form-input" name='location' value={credentials.location} onChange={changeEvent} /><br />

        <button className="btn1">Sign Up</button>
      </form>
    </div>
  );
}

export default Form2;
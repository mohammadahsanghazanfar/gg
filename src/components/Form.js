import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [wasTouched, setWasTouched] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  let emailIsValid = credentials.email.includes('@gmail.com');
  let passwordIsValid=credentials.password.length>3
  let emailIsInvalid = !emailIsValid && wasTouched;
  let passwordIsInvalid=!passwordIsValid && wasTouched

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWasTouched(true);

    if (!emailIsValid || !passwordIsValid ) {
      return;
    }

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    
    const data = await response.json();
    console.log(data);
    
    if (!data.success) {
      alert("Enter valid credentials");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", data.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }

    setWasTouched(false);
  };

  const blurHandler = () => {
    setWasTouched(true);
  };
  const click = () => {
    setWasTouched(false);
  };
  const changeEvent = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br />
        <input
          type="text"
          className={`w-100 form-input ${emailIsInvalid ? 'invalid' : ''}`}
          onBlur={blurHandler}
          onClick={click}
          name="email"
          value={credentials.email}
          onChange={changeEvent}
        /><br />
        {emailIsInvalid && <p className="error-text">Please enter a valid Gmail address</p>}

        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          className={`w-100 form-input ${passwordIsInvalid ? 'invalid' : ''}`}
          onBlur={blurHandler}
          name="password"
          onClick={click}
          value={credentials.password}
          onChange={changeEvent}
        /><br />

        <button className="btn1" disabled={!emailIsValid || !passwordIsValid}>Login</button>
      </form>
    </div>
  );
}

export default Form;

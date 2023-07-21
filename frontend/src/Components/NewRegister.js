import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function NewRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);
  const handleButton = (e) => {
    e.preventDefault();
    setStore({ ...data });
    console.log(store,"store");
    console.log("data", data);
    const { email, password } = data;
    const API = "http://localhost:7070/user/register"
    
    if (email && password) {
      axios.post(API,data)
        .then(res => {
          // alert("user registered")
          console.log(res.data);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SignupCon">
      <div className="SignText" style={{color:"black"}}>Sign up here</div>
      <div className="cardForm">
        <form className="SignupForm">
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <label>Name:<input
            className="signup"
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          /></label>
                   <label>PhoneNumber: <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          /></label>
                   <label>Username: <input
            className="signup"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          /></label>
                    <label>Password:<input
            className="signp"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          /></label>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/user/login" style={{color:"black"}}> Already have an account? Sign in</NavLink>
          </div>
        </form>
      </div>

    </div>
  );
}

export default NewRegister;
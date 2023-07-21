
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(data);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "http://localhost:7070/user/login";
    // console.log("working");
    // navigate("/home");
    if (email && password) {
      axios
        .post(API, data)
        .then((res) => {
          // alert("User registered");
          console.log(res.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter email and password.");
    }
  };

  const handleBackBtn = ()=>{
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleBackBtn} className="backButtn">Back</button>
      <div className="loginText" style={{color:"red"}}>Login here</div>
      <div className="loginForm">
        <div className="logComCon">
          {/* <div>Login entering your Correct credentials</div> */}
          {/* <div>login</div> */}
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          /><form>
          <div className="Logcont1">
            {/* <label htmlFor="email">Email:</label> */}
            <label>Username:<input
              className="lLoginInp"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            /></label>
          </div>
<br />
          <div className="Logcont2">
            {/* <label htmlFor="password">Password:</label> */}
            <label>Password:<input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            /></label>  
          </div>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
      </div>
         </div>
  );
}

export default Login;
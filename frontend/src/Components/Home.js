import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
const navi = useNavigate()
const [data, setData] = useState()
// const {name} = data
const API = "http://localhost:7070/user/register"
axios.get(API)
.then(res=>{
  console.log(res);

})
.catch(err=>console.log(err))
   
  return (
    <div className='home'> 

<div className='logoutBut'><button onClick={()=>navi('/')} className='homeLogOut'>Logout</button></div>
       <div className='homeText'> <h1 >Welcome Name</h1></div>
    <div className="homeBody"><img className="homeImg" src="https://images.ctfassets.net/vfkpgemp7ek3/2WO42hC1SEUS5xBXdEU4bL/0cfa8dab67a29526b62a0317ec263c95/banner.jpg" alt="no img"/></div>

    </div>
  )
}

export default Home

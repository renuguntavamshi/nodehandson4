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
    
    </div>
  )
}

export default Home

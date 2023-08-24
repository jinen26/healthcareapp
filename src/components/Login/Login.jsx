import React from 'react'
import "./Login.css"
import doctor from "../../img/doctor.png"
import iconemail from "../../img/iconemail.png"
import iconpassword from "../../img/passwordicon.png"
import { Link } from 'react-router-dom'


const Login = ({setlogin}) => {
  
  return (
    <div className='form'>
      <div className='data'>
        <div className='deco'>
          
      <button className='delete' onClick={()=>setlogin(false)}>X</button>
          <h1>Welcome...</h1>
          <p>first is first</p>
          <img src={doctor}/>
        </div>
        <div className='login'>
          
          <h1>Login</h1>
            <div className='input-box'>
                <span className='iconem'> <img src={iconemail}/></span>
                <input type='email' placeholder='' required/>
                <label>Email</label>
            </div>
            <div className='input-box'>
            
                <span className='iconpass'> <img src={iconpassword}/>
  </span>
                <input type='password'placeholder='' required/>
                <label>Password</label>
            </div>
            <div className='Remember'>
              <label><input type='checkbox'/>Remember me</label>
             <div className='register'>
             <p>Don't have an account?  <a href='#'>Register</a></p>
             </div>
            </div>
            
            <button className='submit'type='submit' onClick={()=>setlogin(false)}><Link to="/patient" >Login</Link></button>
        </div>
      </div>
    
    </div>
  )
}

export default Login

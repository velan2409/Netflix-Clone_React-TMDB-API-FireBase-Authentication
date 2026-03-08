import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" ? <input type="text" placeholder='Your name' required /> : <></>}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
            : <p>Already have account <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
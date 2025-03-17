import React from 'react'
import "./css/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Password'/>
          
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already have Account? <span>Login here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By agreeing, I accept all the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

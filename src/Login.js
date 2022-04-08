import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className='login-main'>
            {/* <h1>Now, setup your account 🔐</h1> */}
            <div className="login-container">
                <h1>Log In</h1>
                <form className='login-form' action="">
                    <div className="login-field">
                        <label htmlFor="" className="login-label">Email</label>
                        <input className='login-input' type="email" />
                    </div>
                    {/* <div className="login-field">
                      <label htmlFor="" className="login-label">Mobile</label>
                      <input className='login-input' type="text" />
                </div> */}
                    <div className="login-field">
                        <label htmlFor="" className="login-label">Password</label>
                        <input className='login-input' type="password" />
                    </div>
                    <button className="login-btn">Log in</button>

                    <div className="login-linkTo">
                        <a href="/signup">Create account</a>
                        <a href="">Forgot password?</a>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
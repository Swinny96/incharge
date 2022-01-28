import React from "react"

const Form = props => (
  <div className="Form">
    <h2 className="Login-Form-Title">Log In</h2>
    <form className="Login-Form">
      <div className="Login-Fields">
        <div className="Login-Field">
          <input type="text" placeholder="User Name"></input>
        </div>
        <div className="Login-Field">
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      <a href="/" className="Login-Forgot">
        Forgot your password?
      </a>
      <a href="/" className="Login-Button">Login</a>
      <hr />
      <div className="SignUp">
        <span>Don't have an account?</span>
        <a href="/">Sign Up</a>
      </div>
    </form>
  </div>
)

export default Form

import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';

const Signin = () => { 

  // initialize hooks to help you store data entered by the user on the form
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  // Initialize three other additional hooks to help you manage the state of your application

const [loading, setLoading] = useState("");
const[success, setSuccess] = useState("");
const[error, setError] = useState("");

// Create a navigate hook that will redirect a person to another page after a successful log in
const navigate =useNavigate();
// create a function to handle the user sign in
const login =async(e) =>{
  // Prevent tour site from reloading
  e.preventDefault();

  // Update the loading hook with the message
  setLoading("Please wait as we log you in")
  try{
    // Create a new form data object
    const data = new FormData()

    // Append the two details i.e. email and password onto the form data
    data.append("email", email);
    data.append("password", password);

    // Post the data through the API
    const response = await axios.post("https://CarlsonKadendi.pythonanywhere.com/api/signin", data)

    // Check wether the details returned 
    if(response.data.user){
      setLoading("");
      setSuccess("Login Successful")
      navigate("/")
    }
    else{
      setLoading("");
      setError("Invalid Login details!!! Please try again ...")
    }

  }
  catch(error){
    setLoading("");
    setError(error.message)
  }
}

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6 card shadow p-2">
      <h3 className="text-center mb-4 fw-bold" style={{ 
  background: 'linear-gradient(45deg, #198754, #6f42c1)', 
  WebkitBackgroundClip: 'text', 
  WebkitTextFillColor: 'transparent' 
}}>
  Welcome Back to our site👋
</h3>


        <b className='text-warning'>{loading}</b>
        <b className='text-success'>{success}</b>
        <b className='text-danger'>{error}</b>

          

        <div className="d-flex align-items-center justify-content-center vh-10 bg-warning">
  <div className="col-md-7 col-lg-8 shadow-lg p-2 bg-white rounded">
    {/* form goes here */}
    <form onSubmit={login}>
          <input type="email"
          placeholder='Enter the email Address'
          required
          value={email}
          onChange={(e) => setEmail (e.target.value)} 
          
        
          className='form-control' /> <br />
          {/* {email} */}
        
         <input
         type='password'
         placeholder='Enter password'
         required
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className='form-control'
          /> <br />
          {/* {password} */}

          <input
  type="submit"
  value={loading ? "Signing in..." : "Sign In"}
  className="btn w-100 text-white fw-bold"
  style={{
    background: 'linear-gradient(45deg, #198754, #6f42c1)',
    border: 'none',
    padding: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    transition: '0.3s ease-in-out',
    borderRadius: '8px',
  }}
/>
 <br />
          <p>Don't have an account?? <Link to={'/signup'} className="text-info">Sign up</Link></p>
        </form>
  </div>
</div>

        </div>
        <Footer/>
    </div>
  )
}

export default Signin
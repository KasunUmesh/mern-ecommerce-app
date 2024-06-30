/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "", 
    email: "", 
    password: ""
  });

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;

      if (responseData.success) {
        if (responseData.token) {
          localStorage.setItem("authToken", responseData.token);
        }
        window.location.replace("/");
      } else {
        if (responseData.errors) {
          alert(responseData.errors);
        }
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Optionally, handle error with a user-friendly message
      alert("An error occurred while signing up. Please try again.");
    }
  };

  const signup = async () => {
    try {
        const response = await axios.post('http://localhost:4000/signup', formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;

        if (responseData.success) {
            if (responseData.token) {
                localStorage.setItem('authToken', responseData.token);
            }
            window.location.replace('/');
        } else {
            if (responseData.errors) {
                alert(responseData.errors);
            }
        }
    } catch (error) {
        console.error('Error signing up:', error);
        // Optionally, handle error with a user-friendly message
        alert("An error occurred while signing up. Please try again.");
    }
};

  return (
    <section className='mx-auto max-w-full px-6 lg:px-20 flex items-center justify-center flex-col pt-24 pb-24 bg-[#f8f7f4]'>
      <div className='w-full max-w-[666px] h-[500px] bg-[#f8f7f4] m-auto px-14 py-10 rounded-md shadow-xl'>
        <h3 className='text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold'>{state}</h3>
        <div className='flex flex-col gap-4 mt-7'>
          {state === "Sign Up" ? <input value={formData.username} onChange={handleChange} name='username' type='text' placeholder='Your Name' className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm'/> : ""}
          <input value={formData.email} onChange={handleChange} name='email' type='email' placeholder='Your Email' className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm'/>
          <input value={formData.password} onChange={handleChange} name='password' type='password' placeholder='Password' className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm'/>
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}} className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 text-white transition-all hover:bg-[#222222]/90 rounded-xl my-5 !py-1'>Continue</button>

        {state === "Sign Up" ? <p className='text-black font-bold'>Already have an account? <span onClick={() => {setState("Login")}} className='text-[#fe784f] underline cursor-pointer'>Login</span></p> : <p className='text-black font-bold'>Create an account? <span onClick={() => {setState("Sign Up")}} className='text-[#fe784f] underline cursor-pointer'>Click here</span></p>}

        <div className='flex items-center justify-start mt-6 gap-3'>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login
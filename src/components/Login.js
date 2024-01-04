import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
// import loginpic from "../images/signuppic.jpg";
import {UserContext} from "../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();


    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credientials");
      console.log("Invalid");
    }
    else{
      dispatch({type: "USER", payload: true});
      window.alert("Login Successfull");
      // console.log("successfull");
      navigate('/');
    }
  }

  return (
    <>
      <section className='sign-in'>
        <div className='container mt-5 '>
          <div className='signin-content flex justify-center gap-20 items-center '>

          
              <figure className=' bg-yellow-600  w-[375px] mt-1'>
                <img src='/login.jpg' alt='login pic' />
              </figure>
            

            <div className='signin-form flex flex-col gap-3 p-20 w-[375px] shadow-md'>
              <h2 className='form-title font-bold text-slate-700'>Log In</h2>
              <form method='POST' className='register-form flex flex-col gap-3' id='register-form'>

                <div className='form-group flex gap-2 '>
                  <label className=' text-2xl text-slate-600' htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                   className=' text-md outline-none'
                   type='email' name='email' id='email' autoComplete='off'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder='Your Email'></input>
                </div>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='password '>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                   className=' text-md outline-none'
                   type='password' name='password' id='password' autoComplete='off'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder='Your password'></input>
                </div>

                <div className='form-group form-button flex flex-col items-center gap-3 mt-4'>
                  <input
                   type='submit' name='signin' id='signin' className='form-submit bg-blue-700 py-2 px-3 rounded-lg font-bold text-white hover:bg-red-600' value='Log In'
                   onClick={loginUser}
                  />
                  <div>Not Registered?
               <NavLink to="/signup" className="signup-image-link no-underline font-semibold">Sign up</NavLink>
                </div></div>

              </form>
            </div>
            

          </div>
        </div>
      </section>
    </>
    
  )
}

export default Login
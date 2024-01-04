import React, { useState }  from 'react'
import { NavLink, useNavigate } from "react-router-dom";
// import signpic from "../images/signuppic.jpg"

const Signup = () => {
  const navigate = useNavigate(); /// useHistory now changed as useNavigate.

  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    const data = await res.json(); 

    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate('/login');
    }
  }


  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content flex items-center justify-center'>
            <div className='signup-form bg-white shadow-md p-20'>
              <h2 className='form-title mb-4 font-bold text-slate-700'>Sign up</h2>
              <form method='POST' className='register-form flex flex-col gap-2' id='register-form'>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='name'>
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                   className=' outline-none text-slate-700'
                   type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your Name'></input>
                </div>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input 
                  className=' outline-none text-slate-700'
                  type='email' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your Email'></input>
                </div>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='phone'>
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input 
                  className=' outline-none text-slate-700'
                  type='number' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Your Phone'></input>
                </div>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='work'>
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                  className=' outline-none text-slate-700'
                   type='text' name='work' id='work' autoComplete='off' value={user.work} onChange={handleInputs} placeholder='Your Profession'></input>
                </div>

                <div  className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                  className=' outline-none text-slate-700'
                   type='password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Your password'></input>
                </div>

                <div className='form-group flex gap-2'>
                  <label className=' text-2xl text-slate-600' htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                  className=' outline-none text-slate-700'
                   type='password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Your password'></input>
                </div>

                <div className='form-group form-button'>
                  <input type='submit' name='signup' id='signup' className='form-submit bg-blue-600 px-3 py-2 rounded-lg text-lg font-bold mt-2 text-white hover:bg-red-500' value='Register' onClick={PostData} />
                </div>
              <div>Already Registered?
              <NavLink to="/login" className="signup-image-link no-underline font-semibold"> Sign in</NavLink></div>
              </form>
            </div>

            
              <figure>
                <img src = '/login.jpg' alt='registration pic' width = {'500px'} />
              </figure>
           

          </div>
        </div>
      </section>
    </>

  )
}

export default Signup
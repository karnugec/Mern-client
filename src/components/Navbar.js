import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
import {UserContext} from "../App";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    const {state, dispatch} = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return (
                <div className={`flex gap-4 text-xl font-bold text-slate-300`}>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about">About</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/logout">Logout</NavLink>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className={`${isOpen ? 'flex-col mt-3 ' : 'hidden lg:flex flex-row' }  flex gap-4 text-xl font-bold text-slate-300 `}>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about">About</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/login">Login</NavLink>
                    </div>
                    <div className="">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/signup">Register</NavLink>
                    </div>
                </div>
            )
        }

    }

   

  return (
    <>
        <div className=" flex w-[100%] justify-between px-10 py-2 bg-slate-700" id="">
            <NavLink className="" href="#"><img className="logo-img" src='/logo192.png' alt="navlogo" /></NavLink>
            <div className="">
            <div className='lg:flex'>

            <div onClick={() => setIsOpen(isOpen)} className='block lg:hidden text-3xl cursor-pointer text-slate-400'><ion-icon name="menu"></ion-icon></div>
            <RenderMenu />
            </div>  
            </div>
        </div>
    </>
  )
}

export default Navbar
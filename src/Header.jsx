import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menu, setMenu] = useState(false);
  return (
    <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        <nav 
        className={menu ? "mobile":null}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className='menu' width="20" height="21" onClick={()=>setMenu(!menu)}><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
            <ul>
                <li>
                    <NavLink to="/" onClick={()=>setMenu(!menu)}><span>00</span>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destination" onClick={()=>setMenu(!menu)}><span>01</span>Destination</NavLink>
                </li>
                <li>
                    <NavLink to="/crew" onClick={()=>setMenu(!menu)}><span>02</span>Crew</NavLink>
                </li>
                <li>
                    <NavLink to="/technology" onClick={()=>setMenu(!menu)}><span>03</span>Technology</NavLink>
                </li>
            </ul>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg"  className={menu ? "menu hide":"menu"} width="24" height="21" onClick={()=>setMenu(!menu)}><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        
    </header>
  )
}   

export default Header
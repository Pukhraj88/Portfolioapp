import { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export const Navbar = () => {

  const[click,setClick]=useState(false)

  const handleonClick=()=>{
     setClick(!click)
  }

  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="logo-web">
            <img src="1.png" alt="" />
          </div>
          <div className={click?"btn-active":"navbar"}>
            <ul className="navbar-ul">
              <NavLink to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}><li className="navbar-ul-li">Home</li></NavLink>
              <NavLink to={"/skills"} style={{ textDecoration: 'none', color: 'inherit' }}><li className="navbar-ul-li">Skills</li></NavLink>
              <NavLink to={"/hero"} style={{ textDecoration: 'none', color: 'inherit' }}><li className="navbar-ul-li">AboutUs</li></NavLink>
              <NavLink to={"/contact"} style={{ textDecoration: 'none', color: 'inherit' }}><li className="navbar-ul-li">Contact</li></NavLink>
            </ul>
          </div>
      
          <button className="btn-nav" onClick={handleonClick}><GiHamburgerMenu/></button>
        </nav>
      </div>
    </>
  );
};

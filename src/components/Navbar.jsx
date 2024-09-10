import React from 'react'
import logo from "../assets/kevinRushLogo.png"

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const NavBar = () => {
  return (
    <>
    <nav className='mb-2 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="" />
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
      </div>
      
    </nav> 
   
    </>
  )
}

export default NavBar
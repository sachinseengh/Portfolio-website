import React from 'react';
import logo from "../assets/kevinRushLogo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Corrected from FaSquareXTwitter
import { FaInstagram } from "react-icons/fa";
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const NavBar = () => {
  const [text] = useTypewriter({
    words: ['SACHIN SINGH'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 1000,
  });

  return (
    <>
      <nav className='mb-2 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          {/* Uncomment the logo if needed */}
          {/* <img className='mx-2 w-10' src={logo} alt="Logo" /> */}
          <span className='text-4xl'>{text}</span>
          <span className='text-4xl text-red-600'><Cursor/></span>
         
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin />
          <FaGithub />
          <FaTwitter /> {/* Corrected icon */}
          <FaInstagram />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

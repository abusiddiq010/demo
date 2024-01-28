import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";




const FooterLinks = () => {
  return (
    <footer className='flex flex-wrap justify-between'>
    <nav className='text-[#505F98] flex flex-col sm:flex-row gap-10'>
        <p>Home</p>
        <p>ABout</p>
        <p>Contact</p>
     </nav>
     <div className='hidden sm:flex  sm:visible gap-8 text-[#B0B8BC]'>
        <a href=''><FaFacebookF/></a>
        <a href=''><TiSocialLinkedin/></a>
        <a href=''><FaSquareXTwitter/></a>
        <a href=''><FaYoutube/></a>
        <a href=''><AiOutlineInstagram/></a>
     </div>
    </footer>
  )
}

export default FooterLinks

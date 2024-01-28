import React, { useState } from 'react'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-between md:px-20 h-8 '>
     <nav className='hidden md:flex text-[#505F98]  gap-10'>
        <p>Home</p>
        <p>ABout</p>
        <p>Contact</p>
     </nav>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <IoClose size={30} className='absolute left-[160px]'/> : <GiHamburgerMenu size={30} />}
      </div>

      {nav && <nav className=' w-[200px] h-[300px] text-[#505F98] flex flex-col absolute top-0 px-5 py-10 bg-slate-200 gap-10'>
        <p>Home</p>
        <p>ABout</p>
        <p>Contact</p>
     </nav> }
     <h2 className='text-lg text-[#37447E] font-bold'>Landing</h2>
     <Button >Buy now</Button>

    </div>
  )
}

export default Navbar

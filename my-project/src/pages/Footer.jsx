import React from 'react'
import Button from '../components/Button'
import FooterLinks from '../components/FooterLinks'

const Footer = () => {
  return (
    <footer className='py-8 bg-[#E7ECFF] h-[216px]'>
    <div className='flex flex-row sm:flex-col px-5 sm:px-20 gap-8 sm:gap-4 '>
    <div className='flex flex-col sm:flex-row justify-between mt-4'>
      <p><span>&copy;</span>Abu siddiq</p>
      <p className="text-xl text-[#37447E] font-bold">Landing</p>
      <Button>Purchanse Now</Button>
    </div>
    <hr className="h-px my-8 hidden sm:block bg-[#CDD1D4] border-0 dark:bg-gray-700"/>
    <div>
    <FooterLinks/>
    </div>
    </div>
    </footer>
  )
}

export default Footer

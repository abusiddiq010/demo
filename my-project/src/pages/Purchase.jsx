import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import "./Purchase.css"

const Purchase = () => {
    const title="A Price To Suit Everyone"
    const description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "


  return (
    <section className='bg-[#E7ECFF] bg-opacity-60 custom-shape-divider-top-1706427852'>
   <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
    <div className='h-screen  flex flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-4xl font-bold text-[#091133] text-center'>{title}</h1>
      <p className='text-[#6F7CB2] w-[50%] sm:text-center'>{description}</p>
      </div>
      <div>
        <p className='text-4xl text-[#222F65] font-bold'>$ 40</p>
        <p className='text-[#37447E]'>UI Design Kit</p>
      </div>
        <p>See, One price. Simple.</p>
        <Button >Purchase now</Button>
    </div>
    </section>

  )
}

export default Purchase

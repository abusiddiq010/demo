import React from 'react'
import Card from '../components/Card'
import {dashboardImage} from "../assets/index"
import Button from '../components/Button'
import path from "../assets/Path.png"
import Navbar from '../components/Navbar'

const Dashboard = () => {
    const title="Introduce Your Product Quickly & Effectively"
    const description=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`
    
  return (
    <section className='mb-10 sm:mb-[20%]'>
    <div className='z-0'>
    <Navbar/>
    </div>
    <div className='flex flex-col lg:flex-row gap-12'>
    <div className='lg:w-[50%] z-50 mt-[10%] sm:mt-[15%] ml-[3%] sm:ml-[6%]'>
    <h1 className="text-[#091133]  text-4xl font-bold">{title}</h1>
    <p className="py-4 text-[#505F98] text-lg">{description}</p>
    <div className='flex gap-10'>
        <Button>Purchanse UI Kit</Button>
        <button className='border-2 border-[#091133] px-8 py-1'>learn more</button>
    </div>
    </div>
    <img className='object-contain z-50 sm:mt-[10%]' src={dashboardImage} alt='' />
    <img className='z-10 hidden lg:block absolute right-0' src={path} alt=''/>
    </div>
    </section>
  )
}

export default Dashboard
 
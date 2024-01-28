import React from 'react'
import Card from '../components/Card'
import {WhatWeDo_1,WhatWeDo_2} from "../assets/"

const WhatWeDo = () => {
    const title="Light, Fast & Powerful"
    const description=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`
    const description1=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
  return (
    <section className='sm:h-screen grid grid-cols-1 lg:grid-cols-2 justify-between gap-12 px-8 pb-20 sm:px-20'>
    <div className='flex flex-col justify-center items-center gap-8'>
        <div>
            <Card className="grid grid-cols-1" title={title} description={description}/>
        </div>
        <div className='flex justify-between gap-4'>
            <div className='flex flex-col gap-4'>
            <img className='h-[36px] w-[36px]' src={WhatWeDo_2} alt=''/>
            <Card subHeading={true} subDesc={true} title={title} description={description1}/>
            </div>
            <div className='flex flex-col gap-4'>
            <img className='h-[36px] w-[36px]' src={WhatWeDo_2} alt=''/>
            <Card subHeading={true} subDesc={true} title={title} description={description1}/>
            </div>
        </div>
    </div>
    <div>
        <img className='object-contain' src={WhatWeDo_1} alt=''/>
    </div>
    </section>
  )
}

export default WhatWeDo

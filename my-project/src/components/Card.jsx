import React from 'react'
import Button from './Button'

const Card = ({title,description,src,alt,showImage,btnShow, btnText,subHeading,subDesc}) => {
    const gridClass = showImage ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid ${gridClass} justify-around gap-12`}>
    {showImage && 
    (<figure className='flex  justify-center items-center'>
        <img  className='object-fill'src={src} alt={alt}/>
    </figure>)}
    <div className='flex flex-col text-start justify-center gap-4'>
    <h1 className={`text-[#091133] ${subHeading ? "text-lg" : "text-3xl"} font-bold`}>{title}</h1>
    <p className={`text-[#505F98] ${subDesc ? "text-sm" : "text-md"}`}>{description}</p>
    {btnShow && <div className='my-10'>
        <Button>{btnText}</Button>
    </div>}
    </div>
    </div>
  )
}

export default Card

import React from 'react'
import Card from '../components/Card'
import CardData from '../data';

const WhyUs = () => {
  return (
    <section className=' px-8 sm:px-20'>
    {CardData.map(({ image, title, description,btnShow,btnText}) => {
      return (
        <article key={title} className='h-screen'>
          <Card btnShow={btnShow} btnText={btnText} src={image} alt={""} showImage={true} title={title} description={description} />
        </article>
      );
    })}
  </section>
  )
}

export default WhyUs

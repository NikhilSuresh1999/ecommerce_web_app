import React from 'react'
import MainCarosel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from "../../../../Data/mens_kurta"

function HomePage() {
  return (
    <div>
      <MainCarosel/>

      <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shoe"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shirt"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Womens Saree"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Womens's Dress"}/>
      

      </div>

    </div>
  )
}

export default HomePage
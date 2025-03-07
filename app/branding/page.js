import React from 'react'
import Schedule from './components/Schedule'
import WhyPartner from './components/WhyPartner'
import Consulting from './components/Consulting'
import WhatWeOffer from './components/WhatWeOffer'
import WhyConsulting from './components/ WhyConsulting'
import Shape from './components/Shape'

const page = () => {
  return (
    <>
    <Shape/>
    <WhyConsulting/>
    <WhatWeOffer/>
    <WhyPartner/>
    <Consulting/>
    <Schedule/>
    </>
  )
}

export default page
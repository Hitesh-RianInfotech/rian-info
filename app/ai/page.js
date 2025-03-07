import React from 'react'
import Ai from './components/Ai'
import AutomationSection from './components/AutomationSection'
import AISolutionsLayout from './components/AiSolutionLayout'
import CaseStudies from '../components/CaseStudies'
import Success from './components/Success'
import WhyChoose from './components/WhyChoose'
import How from './components/How'
import Transform from './components/Transform'

const page = () => {
  return (
<>
<Ai/>
<AutomationSection/>
<AISolutionsLayout/>
<Success/>
<WhyChoose/>
<How/>
<Transform/>
</>
)
}

export default page
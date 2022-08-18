import React from 'react'
import ServicesComponents from './ServicesFolder/ServicesComponents'
import { firstService } from './ServicesFolder/ServicesData'

const Services = () => {
  return (
    //this is what's going to be import everything so that when i go to index.js under the Pages folder, I can just do <Services />
        <ServicesComponents {...firstService}/> 
    )
}

export default Services
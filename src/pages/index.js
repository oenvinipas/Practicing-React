import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Services from '../components/Services'
// import { firstService } from '../components/Services/ServicesFolder/ServicesData'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <Search />
        <Services />
        {/* <Services {...firstService}/> */}
    </>
  )
}

export default HomePage
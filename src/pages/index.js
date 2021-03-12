import React, { useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import HeadSection from '../components/HeadSection'
import { BioObj } from '../components/BioSection/Data'
import BioSection from '../components/BioSection'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <MobileMenu isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeadSection />
            <BioSection { ...BioObj } />
        </>
    )
}

export default Home

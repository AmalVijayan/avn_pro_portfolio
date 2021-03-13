import React, { useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import HeadSection from '../components/HeadSection'
import { BioObj } from '../components/BioSection/Data'
import { SkillObj } from '../components/SkillSection/Data'
import BioSection from '../components/BioSection'
import SkillSection from '../components/SkillSection'
import Footer from '../components/Footer'

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
            <SkillSection  { ...SkillObj } />
            <Footer />
        </>
    )
}

export default Home

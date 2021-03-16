import React, { useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import Footer from '../components/Footer'
import GetInTouchSection from '../components/GetInTouchSection'
import ScrollToTop from '../ScrollToTop'

const GetInTouch = () => {

    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>  
            <ScrollToTop />
            <MobileMenu isOpen={isOpen} toggle={toggle} showScrollMenu={false} showHomeIcon={true}/>
            <NavBar toggle={toggle} showScrollMenu={false} showHomeIcon={true} />
            <GetInTouchSection />
            <Footer/>
        </>
    )
}

export default GetInTouch

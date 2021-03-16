import React, { useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'

const Blog = () => {

    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <> 
            <MobileMenu isOpen={isOpen} toggle={toggle} showScrollMenu={false} showHomeIcon={true}/>
            <NavBar toggle={toggle} showScrollMenu={false} showHomeIcon={true} />
            <BlogSection />
            <Footer/>
        </>
    )
}

export default Blog

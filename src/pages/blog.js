import React, { useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import Footer from '../components/Footer'

const Blog = () => {

    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <> 
            <MobileMenu isOpen={isOpen} toggle={toggle} showScrollMenu={false} showHomeIcon={true}/>
            <NavBar toggle={toggle} showScrollMenu={false} showHomeIcon={true} />
            <h1> THIS IS BLOG</h1>
        </>
    )
}

export default Blog

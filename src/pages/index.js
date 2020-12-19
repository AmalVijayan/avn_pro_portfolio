import React, {useState} from 'react'
import Header from '../Components/Header/Header'
import MobileMenu from '../Components/MobileMenu/MobileMenu'

const Home = () => {
    
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
        <Header toggle={toggle}/>
        <MobileMenu isOpen={isOpen} toggle={toggle}/>
        </>
    )
}

export default Home

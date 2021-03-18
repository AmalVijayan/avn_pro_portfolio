import React,{ useState } from 'react'
import  NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import HeadSection from '../components/HeadSection'
import { BioObj } from '../components/BioSection/Data'
import { SkillObj } from '../components/SkillSection/Data'
import BioSection from '../components/BioSection'
import SkillSection from '../components/SkillSection'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import { OverviewObj } from '../components/Overview/Data'
import Services from '../components/Services'
import ScrollToTop from '../ScrollToTop'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            {/* <ReactTooltip className="toolTip" /> */}
            <ScrollToTop />
            <MobileMenu isOpen={isOpen} toggle={toggle} showScrollMenu={true} showHomeIcon={false}/>
            <NavBar toggle={toggle} showScrollMenu={true} showHomeIcon={false}/>
            <HeadSection />
            {/* <BioSection { ...BioObj } /> */}
            <Overview { ...OverviewObj }/>
            <Services />
            {/* <SkillSection  { ...SkillObj } /> */}
            <Footer />
        </>
    )
}

export default Home

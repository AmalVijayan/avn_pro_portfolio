import React, {useState, useEffect} from 'react'
import { FaBars, FaHome, FaLayerGroup} from 'react-icons/fa'
import {
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcons, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavBtnWrapper,
    HomeIconLink,
    TechstackIconWrapper
} from './NavbarElements';
import './NabarStyles.css';
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const NavBar = ({toggle, showScrollMenu, showHomeIcon}) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = ()=> {
        if (window.scrollY >= 80){
            setscrollNav(true)
        }
        else {
            setscrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={ toggleHome }>
                        Amal V Nair
                    </NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars/>
                    </MobileIcons>
                    <HomeIconLink showHomeIcon={showHomeIcon} to='/'>
                            <FaHome />
                     </HomeIconLink>
                    <NavMenu showScrollMenu={showScrollMenu}>
                        <NavItem>
                            <NavLinks to='profile' 
                            offset={-80}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' 
                            offset={-80}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >
                                Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='inventory' 
                            offset={-80}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >
                                Arsenal</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtnWrapper>
                        <NavBtn>
                            <NavBtnLink to="/blog">Blog</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to="/getintouch/me">Get In Touch</NavBtnLink>
                        </NavBtn>
                    </NavBtnWrapper>
                    <Tippy  interactive={true} interactiveBorder={200} delay={0} content={
                        <div className='tippy_div'>
                            <h4 className='tippy_heading' >Built using</h4>
                            <ul className='tippy_content'>
                                <li>React</li>
                                <li>Django</li>
                                <li>Celery</li>
                                <li>Docker</li>
                                <li>AWS EC2</li>
                                <li>AWS CloudFront</li>
                                <li>AWS S3</li>
                                <li>AWS Route53</li>
                                <li>AWS ACM</li> 
                                <li>Nginx</li>
                                </ul>
                        </div>
                            } 
                            >  
                        <TechstackIconWrapper>
                            <FaLayerGroup size='20px' />
                        </TechstackIconWrapper>
                    </Tippy>
                </NavContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar

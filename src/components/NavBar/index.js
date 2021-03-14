import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcons, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavBar = ({toggle}) => {

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
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='bio' 
                            offset={0}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills' 
                            offset={0}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >
                                Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='blog' 
                            offset={-5}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >Blog</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/getintouch/me">Get In Touch</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar

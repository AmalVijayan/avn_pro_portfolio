import React, {useState, useEffect} from 'react'
import { FaBars, FaHome } from 'react-icons/fa'
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
    HomeIconLink
} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

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
                            offset={0}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' 
                            offset={0}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active'
                            >
                                Services</NavLinks>
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
                </NavContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar

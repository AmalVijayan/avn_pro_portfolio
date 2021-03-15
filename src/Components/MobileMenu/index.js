import React from 'react'
import { MobileMenuContainer,
         Icon,
         CloseIcon,
         MobileMenuItemsContainer,
         MobileMenuItem,
         MobileMenuLinks,
         MobileMenuItemBtn,
         MobBtnLink
        } from './MobileMenuElements'

const MobileMenu = ({isOpen, toggle}) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
            <MobileMenuItemsContainer>
                    <MobileMenuItem>
                        <MobileMenuLinks to='profile' 
                            offset={-80}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle} >Profile</MobileMenuLinks>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLinks to='services' 
                            offset={-50}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'onClick={toggle} >Services</MobileMenuLinks>
                    </MobileMenuItem>
                    <MobileMenuItemBtn>
                        <MobBtnLink to="/blog">Blog</MobBtnLink>
                    </MobileMenuItemBtn>
                    <MobileMenuItemBtn>
                        <MobBtnLink to="/getintouch/me">Get In Touch</MobBtnLink>
                    </MobileMenuItemBtn>
            </MobileMenuItemsContainer>

        </MobileMenuContainer>
    )
}

export default MobileMenu

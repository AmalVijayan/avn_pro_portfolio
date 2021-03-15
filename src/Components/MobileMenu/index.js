import React from 'react'
import { MobileMenuContainer,
         Icon,
         CloseIcon,
         MobileMenuItemsContainer,
         MobileMenuItem,
         MobileMenuLinks,
         MobileMenuItemBtn,
         MobBtnLink,
         MobileMenuScrollLinks
        } from './MobileMenuElements'

const MobileMenu = ({isOpen, toggle, showScrollMenu}) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
            <MobileMenuItemsContainer>
                <MobileMenuScrollLinks showScrollMenu={showScrollMenu}>
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
                </MobileMenuScrollLinks>
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

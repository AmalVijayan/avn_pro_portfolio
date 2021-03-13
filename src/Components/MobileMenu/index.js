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
                        <MobileMenuLinks to='bio' 
                            offset={-80}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle} >Profile</MobileMenuLinks>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLinks to='skills' 
                            offset={280}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'onClick={toggle} >Skills</MobileMenuLinks>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <MobileMenuLinks to='blog' onClick={toggle}>Blog</MobileMenuLinks>
                    </MobileMenuItem>
                    <MobileMenuItemBtn>
                        <MobBtnLink to="/getintouch/me">Get In Touch</MobBtnLink>
                    </MobileMenuItemBtn>
            </MobileMenuItemsContainer>

        </MobileMenuContainer>
    )
}

export default MobileMenu

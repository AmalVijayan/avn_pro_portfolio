import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MobileMenuContainer,
         Icon,
         CloseIcon,
         MobileMenuItemsContainer,
         MobileMenuItem,
         MobileMenuLinks,
         MobileMenuItemBtn,
         MobBtnLink,
         MobileMenuScrollLinks,
         MobileMenuBtnWrapper,
         HomeIconLink
        } from './MobileMenuElements'
import {SocialIconLink} from '../Overview/OverviewElements'


const MobileMenu = ({isOpen, toggle, showScrollMenu, showHomeIcon }) => {
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
                <MobileMenuBtnWrapper>
                    <HomeIconLink showHomeIcon={showHomeIcon} href='/'>
                            <FaHome />
                     </HomeIconLink>
                    <MobileMenuItemBtn>
                        <MobBtnLink to="/blog">Blog</MobBtnLink>
                    </MobileMenuItemBtn>
                    <MobileMenuItemBtn>
                        <MobBtnLink to="/getintouch/me">Get In Touch</MobBtnLink>
                    </MobileMenuItemBtn>
                </MobileMenuBtnWrapper>
            </MobileMenuItemsContainer>

        </MobileMenuContainer>
    )
}

export default MobileMenu

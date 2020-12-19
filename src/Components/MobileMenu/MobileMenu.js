import React from 'react'
import {
    MobileMenuContainer, 
    Icon, 
    CloseIcon,
    MobileMenuItemsWrapper,
    MobileMenuItems,
    MobileMenuLinks,
    MobileMenuButtonsWrapper,
    MobileMenuButtons,
} from './MobileMenuElements'

const MobileMenu = ({isOpen, toggle}) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <MobileMenuItemsWrapper>
                <MobileMenuItems>
                    <MobileMenuLinks to='about' onClick={toggle} >ABOUT ME</MobileMenuLinks>
                    <MobileMenuLinks to='projects' onClick={toggle} >PROJECTS</MobileMenuLinks>
                    <MobileMenuLinks to='contact' onClick={toggle} >CONTACT ME</MobileMenuLinks>
                </MobileMenuItems>
                <MobileMenuButtonsWrapper>
                    <MobileMenuButtons to="/blog">BLOG</MobileMenuButtons>
                    <MobileMenuButtons to="/resume">RESUME</MobileMenuButtons>
                </MobileMenuButtonsWrapper>
            </MobileMenuItemsWrapper>
        </MobileMenuContainer>
    )
}

export default MobileMenu

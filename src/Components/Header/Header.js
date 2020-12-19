import React from 'react'
import './Header.css' 
import { 
    MobileIcon, 
    HeaderContainer, 
    HeaderTitle, 
    HeaderTitleMobile, 
    HeaderMenu, 
    HeaderMenuItem, 
    HeaderMenuLinks,
    HeaderBtnPane,
    HeaderBtn,
    HeaderBtnLinks,
} from './HeaderElements.js'
import {FaBars} from 'react-icons/fa'

function Header({ toggle }) {
    return (          
        <HeaderContainer>
             <HeaderTitle to='/' className='header_title'>
                <h2>Amal V Nair</h2>
                &nbsp;<p id="slash">/</p>&nbsp;
                <p>Data Scientist & Full Stack Developer</p>
            </HeaderTitle>
            <HeaderTitleMobile to='/' className='header_title_mob'>
                <h2>Amal V Nair</h2>
                <p>Data Scientist & Full Stack Developer</p>
            </HeaderTitleMobile>    
            <MobileIcon onClick={ toggle }>
                <FaBars/>
            </MobileIcon>
            <HeaderMenu>
                <HeaderMenuItem><HeaderMenuLinks to='about' className="hmenu_item" >ABOUT ME</HeaderMenuLinks></HeaderMenuItem>
                <HeaderMenuItem><HeaderMenuLinks to='projects' className="hmenu_item">PROJECTS</HeaderMenuLinks></HeaderMenuItem>
                <HeaderMenuItem><HeaderMenuLinks to='contact' className="hmenu_item">CONTACT ME</HeaderMenuLinks></HeaderMenuItem>
            </HeaderMenu>

            <HeaderBtnPane>
            <HeaderBtn><HeaderBtnLinks to='/blog'>BLOG</HeaderBtnLinks></HeaderBtn>
            <HeaderBtn><HeaderBtnLinks to='/resume'>RESUME</HeaderBtnLinks></HeaderBtn>
            </HeaderBtnPane>
            
        </HeaderContainer>
    )
}

export default Header


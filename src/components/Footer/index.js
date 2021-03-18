import React from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { FooterContainer, 
         FooterWrapper, 
         SocialMedia,
         SocialMediaWrapper,
         SocialIcons,
         SocialIconLink,
         CopyRightTag,
         SocialLogo,
         ReactLogoWrapper,
         ReactLogoText,
         ReactLogo
        } from './FooterElements'
import {IconContext} from 'react-icons/lib'

import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }

    return (
        <IconContext.Provider value={{ color: 'white'}}>
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={ toggleHome }> Amal V Nair </SocialLogo>
                        <CopyRightTag>© {new Date().getFullYear()} All rights reserved.</CopyRightTag>

                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/amal-v-66a23512a/" target="_blank" aria-label="LinkedIn"><FaLinkedin size='30px'/></SocialIconLink>
                            <SocialIconLink href="https://github.com/AmalVijayan" target="_blank" aria-label="GitHub"><FaGithub size='30px'/></SocialIconLink>
                            <SocialIconLink href="https://stackoverflow.com/users/8311953/amal-vijayan" target="_blank" aria-label="StackOverflow"><FaStackOverflow size='30px'/></SocialIconLink>
                        </SocialIcons>
                        <ReactLogoWrapper>
                            <ReactLogoText>Made with</ReactLogoText>
                            <ReactLogo src={require('../../images/logo512.png').default} />
                        </ReactLogoWrapper>
                    </SocialMediaWrapper>
                   
                </SocialMedia>
            </FooterWrapper>
            
        </FooterContainer>
        </IconContext.Provider>
    )
}

export default Footer

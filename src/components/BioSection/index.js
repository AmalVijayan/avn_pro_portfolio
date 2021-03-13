import React from 'react'
import {FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa'

import { BioRow, BioSectionContainer,
         BioWrapper,
         Column1,
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         SubHeading,
         ImgWrap,
         Img,
         SectionBg,
         ImageBg,
         SocialMediaWrapper,
         SocialIcons,
         SocialIconLink,
         SocialMedia
         } from './BioSectionElements'

const BioSection = ( {lightBg, id, img, imgStart, lightText, darkText } ) => {
    return (
        <>
            <BioSectionContainer lightBg={lightBg} id={id} >

            <SectionBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mov' /> */}
                <ImageBg src={require('../../images/dark.svg').default} />
            </SectionBg>

                <BioWrapper>
                   <BioRow imgStart={imgStart} >
                       <Column1>
                        <TextWrapper>
                                <TopLine>Bio</TopLine>
                                <Heading lightText={lightText}>Full Stack  Developer & Data Scientist</Heading>
                                <SubHeading darkText={darkText} >A Software Engineer and a Data Scientist who believes artificial intelligence is the future. A technical blogger who likes to help and assist the technology enthusiasts in the field of artificial intelligence and machine learning and a free time mentor for those who seek help.</SubHeading>
                               
                            </TextWrapper>

                            <SocialMedia>

                                <SocialMediaWrapper>
                                    <SocialIcons>
                                    <SocialIconLink href="#" target="_blank" aria-label="Github"> <FaGithub size="50px"/> </SocialIconLink>
                                    <SocialIconLink href="#" target="_blank" aria-label="LinkedIn"><FaLinkedin size="50px"/></SocialIconLink>
                                    <SocialIconLink href="#" target="_blank" aria-label="StackOverflow"><FaStackOverflow size="50px"/></SocialIconLink>
                                </SocialIcons>
                                </SocialMediaWrapper>
                   
                            </SocialMedia>
                       </Column1>

                       <Column2>

                       <ImgWrap>
                            <Img src={ img } alt='Amal V Nair' />
                        </ImgWrap>

                       </Column2>
                   </BioRow>
                </BioWrapper>
            </BioSectionContainer>
        </>
    )
}

export default BioSection

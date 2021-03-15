import React from 'react'
import './Overview.css'
import { OverviewSectionContainer,
         OverviewWrapper,
         OverviewRow,
         Column1,
         ImgWrap,
         Img,
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         SubHeading,
         Skills,
         SkillsWrapper,
         SkillsIcons,
         SkillsItem,
         StartRating,
         SocialMedia,
         SocialMediaWrapper,
         SocialIcons,
         SocialIconLink,
         BtnWrapper,
         CButton
        } from './OverviewElements'
import { FaLinkedin, FaGithub, FaStackOverflow, FaAws, FaReact, FaDocker, FaPython, FaLinux, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Overview = ( { id, 
                     lightBg,
                     imgStart, 
                     img, 
                     lightText,
                     darkText,
                     skillIconSize,
                     starSize,
                     tooltip1,
                     tooltip2,
                     tooltip3,
                     tooltip4,
                     tooltip5,
                     tooltip6
                    }) => {
    return (
        <>
            <OverviewSectionContainer id={id} lightBg={lightBg} >

                <OverviewWrapper>
                        
                    <OverviewRow imgStart={imgStart} >

                        <Column1>

                            <ImgWrap>
                                <Img src={ img } alt='Amal V Nair' />
                            </ImgWrap>

                            <SocialMedia>

                                <SocialMediaWrapper>
                                    <SocialIcons>
                                        <SocialIconLink href="https://www.linkedin.com/in/amal-v-66a23512a/" target="_blank" aria-label="LinkedIn"><FaLinkedin style={{ color: 'black' }} size="50px"/></SocialIconLink>
                                        <SocialIconLink href="https://github.com/AmalVijayan" target="_blank" aria-label="Github"> <FaGithub style={{ color: 'black' }} size="50px"/> </SocialIconLink>
                                        <SocialIconLink href="https://stackoverflow.com/users/8311953/amal-vijayan" target="_blank" aria-label="StackOverflow"><FaStackOverflow style={{ color: 'black' }} size="50px"/></SocialIconLink>
                                    </SocialIcons>
                                </SocialMediaWrapper>
                                
                            </SocialMedia>

                        </Column1>

                        <Column2 imgStart={imgStart}>

                            <TextWrapper>
                                    <TopLine>Profile</TopLine>
                                    <Heading lightText={lightText}>Full Stack  Developer & Data Scientist</Heading>
                                    <SubHeading darkText={darkText} >Hi! I am Amal.</SubHeading>
                                    <SubHeading darkText={darkText} >I am a Web Developer and a Data Scientist who has worked on one of the most popular ML hackathon platforms in India. An accomplished backend developer who has experience writing clean APIs for almost all key aspects of web development from secure authentication to managing asynchronous tasks to subscription-based payment integrations. Also a front-end developer with hands-on experience in HTML, CSS, JavaScript, and ReactJs.</SubHeading>


                            </TextWrapper>

                            <Skills>
                                <SkillsWrapper>
                                    <SkillsIcons lightText={lightText} >
                                        <SkillsItem>
                                            <FaPython size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip1 }> 
                                                <StartRating>
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                </StartRating>
                                            </Tippy>
                                            </SkillsItem>

                                        <SkillsItem>
                                            <FaDocker size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip2 }> 
                                                <StartRating>
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                    <FaStarHalfAlt size={ starSize }/>
                                                </StartRating>
                                            </Tippy>

                                        </SkillsItem>

                                        <SkillsItem>
                                            <FaAws size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip3 }>
                                                <StartRating data-tip={ tooltip3 }>
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                    <FaStarHalfAlt size={ starSize }/>
                                                </StartRating> 
                                            </Tippy>
                                        </SkillsItem>

                                        <SkillsItem>
                                            <FaReact size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip4 }>
                                                <StartRating>
                                                    <FaStar size={ starSize }/>
                                                    <FaStarHalfAlt size={ starSize }/>
                                                </StartRating> 
                                            </Tippy>
                                        </SkillsItem>

                                        <SkillsItem>
                                            <FaLinux size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip5 }>
                                                <StartRating >
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                    <FaStarHalfAlt size={ starSize }/>
                                                </StartRating> 
                                            </Tippy>
                                        </SkillsItem>

                                        <SkillsItem>
                                            <FaGithub size={ skillIconSize }/>
                                            <Tippy  interactive={true} interactiveBorder={200} delay={0} content={ tooltip6 }>
                                                <StartRating >
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                    <FaStar size={ starSize }/>
                                                </StartRating> 
                                            </Tippy>
                                        </SkillsItem>
                                                    
                                    </SkillsIcons>
                                </SkillsWrapper>

                            </Skills>

                            <BtnWrapper>
                                <CButton>
                                        Download CV
                                </CButton> 
                                <CButton>
                                        Get in touch
                                </CButton> 
                            </BtnWrapper>


                        </Column2>

                    </OverviewRow>


                </OverviewWrapper>

            </OverviewSectionContainer>

        </>
    )
}

export default Overview

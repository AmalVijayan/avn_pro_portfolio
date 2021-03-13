import React from 'react'
import './SkillSectionStyles.css'

import {FaGithub, FaAws, FaReact, FaDocker, FaPython, FaLinux, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { SkillRow, SkillSectionContainer,
    SkillWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    ImgWrap,
    Img,
    Inventory,
    InventoryWrapper,
    InventoryIcons,
    InventoryItem,
    ItemsList,
    ListItem,
    StartRating,
    } from './SkillSectionElements'

import ReactTooltip from 'react-tooltip';


const SkillSection = ({lightBg, 
                       id, 
                       imgStart, 
                       lightText, 
                       img1, 
                       img2 , 
                       tooltipa,
                       tooltipb,
                       tooltipc,
                       tooltipd,
                       tooltipe,
                       tooltipf,
                       tooltipg,
                       tooltip1,
                       tooltip2,
                       tooltip3,
                       tooltip4,
                       tooltip5,
                       tooltip6,
                    }) => {
    return (
        <>

        <SkillSectionContainer lightBg={lightBg} id={id} >

                {/*                     
                <SectionBg>
                    <ImageBg src={require('../../images/before_dawn.svg.svg').default} />
                </SectionBg> */}

                    <SkillWrapper>

                    <ReactTooltip className="toolTip" />


                    <SkillRow imgStart={imgStart} >

                        <Column1>
                            <ImgWrap>
                                <Img src={ img2 } alt='#' />
                            </ImgWrap>
                        </Column1>
                        <Column2>

                            <TextWrapper lightText={lightText}>
                                    <TopLine>Top Skills</TopLine>
                                    <ItemsList>
                                        <ListItem data-tip={ tooltipa }>Backend Development </ListItem>
                                        <ListItem data-tip={ tooltipb }>Data Science & Machine Learning </ListItem>
                                        <ListItem data-tip={ tooltipc }>Server Management & Maintenance </ListItem>
                                        <ListItem data-tip={ tooltipd }>Version Control </ListItem>
                                        <ListItem data-tip={ tooltipe }>Containerizing Applications </ListItem>
                                        <ListItem data-tip={ tooltipf }>Application Deployment  </ListItem>
                                        <ListItem data-tip={ tooltipg }>Frontend Development</ListItem>                    
                                    </ItemsList>
                            </TextWrapper>
                        </Column2>

                        </SkillRow>
                                

                        <SkillRow imgStart={imgStart} >

                            <Column1>

                                    <TextWrapper>
                                            <TopLine>Inventory</TopLine>
                                            
                                            <Inventory>

                                                <InventoryWrapper>
                                                    <InventoryIcons lightText={lightText} >
                                                        <InventoryItem>
                                                            <FaPython size="50px"/> 
                                                            <StartRating data-tip={ tooltip1 }>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                            </StartRating>
                                                        </InventoryItem>
                                                        <InventoryItem>
                                                            <FaDocker size="50px"/> 
                                                            <StartRating data-tip={ tooltip2 }>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                                <FaStarHalfAlt size="40px"/>
                                                            </StartRating>
                                                        </InventoryItem>

                                                        <InventoryItem>
                                                            <FaAws size="50px"/>
                                                            <StartRating data-tip={ tooltip3 }>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                                <FaStarHalfAlt size="40px"/>
                                                            </StartRating> 
                                                        </InventoryItem>

                                                        <InventoryItem>
                                                            <FaReact size="50px"/> 
                                                            <StartRating data-tip={ tooltip4 }>

                                                                <FaStar size="40px"/>
                                                                <FaStarHalfAlt size="40px"/>
                                                            </StartRating>
                                                        </InventoryItem>

                                                        <InventoryItem>
                                                            <FaLinux size="50px"/> 
                                                            <StartRating data-tip={ tooltip5 }>

                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                            </StartRating>
                                                        </InventoryItem>

                                                        <InventoryItem>
                                                            <FaGithub size="50px"/>
                                                            <StartRating data-tip={ tooltip6 }>

                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                                <FaStar size="40px"/>
                                                            </StartRating>
                                                        </InventoryItem>
                                                    
                                                    </InventoryIcons>

                                                </InventoryWrapper>

                                            </Inventory>
                                    </TextWrapper>
                
                            </Column1>

                            <Column2>
                                    <ImgWrap>
                                        <Img src={ img1 } alt='#' />
                                    </ImgWrap>
                            </Column2>

                        </SkillRow>


                    </SkillWrapper>
            </SkillSectionContainer>
                                    
        </>
    )
}

export default SkillSection

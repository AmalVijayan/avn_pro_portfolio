import React from 'react'
import PopUp from '../PopUp'
import { GetInTouchCell,
         GetInTouchRow, 
         GetInTouchSectionContainer, 
         GetInTouchWrapper, 
         SectionHeading,
         GetInTouchInfoWrapper,
         GetInTouchImgWrapper,
         GetInTouchImg,
         GetInTouchLabel,
         GetInTouchDescription,
         BtnWrapper,
         CButton
        } from './GetInTouchElements'
import { isMobile } from "react-device-detect";
import { CButtonLink } from '../Overview/OverviewElements';

const GetInTouchSection = () => {

    if (isMobile) {
        return (
            <>
                <GetInTouchSectionContainer>
                    <GetInTouchWrapper>
                        <SectionHeading>
                            Contact Me
                        </SectionHeading>
                        <GetInTouchRow>
                            <GetInTouchCell>
    
                                <GetInTouchInfoWrapper>
                                    <GetInTouchImgWrapper >
                                        <GetInTouchImg src={require('../../images/contact_us.svg').default} />
                                    </GetInTouchImgWrapper>
    
                                    <GetInTouchLabel>
                                        amalvnair95@gmail.com
                                    </GetInTouchLabel>
    
                                    <GetInTouchDescription>
                                        If you are interested in my works and wish to have me in your team, just drop a hi to the provided email address.
                                    </GetInTouchDescription>
    
    
                                </GetInTouchInfoWrapper>
    
                            </GetInTouchCell>
                        </GetInTouchRow>
    
                        <BtnWrapper>
                                <CButtonLink to='/get/cv'>
                                        Get my CV
                                </CButtonLink>                         
                        </BtnWrapper>
    
    
                    </GetInTouchWrapper>
    
                </GetInTouchSectionContainer>
            </>
        )

    }
    return (
        <>
            <GetInTouchSectionContainer>
                <GetInTouchWrapper>
                    <SectionHeading>
                        Contact Me
                    </SectionHeading>
                    <GetInTouchRow>
                        <GetInTouchCell>

                            <GetInTouchInfoWrapper>
                                <GetInTouchImgWrapper >
                                    <GetInTouchImg src={require('../../images/contact_us.svg').default} />
                                </GetInTouchImgWrapper>

                                <GetInTouchLabel>
                                    amalvnair95@gmail.com
                                </GetInTouchLabel>

                                <GetInTouchDescription>
                                    If you are interested in my works and wish to have me in your team, just drop a hi to the provided email address.
                                </GetInTouchDescription>


                            </GetInTouchInfoWrapper>

                        </GetInTouchCell>
                    </GetInTouchRow>

                    <BtnWrapper>
                        <PopUp button={ <CButton>Get my CV</CButton> } popContent='Thankyou for your interest in my profile! Please enter you email address to receive a copy of my CV.'/>
                    </BtnWrapper>


                </GetInTouchWrapper>

            </GetInTouchSectionContainer>
        </>
    )
}

export default GetInTouchSection

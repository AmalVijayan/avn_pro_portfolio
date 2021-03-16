import React from 'react'
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


const GetInTouchSection = () => {
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
                        <CButton>
                            Download CV
                        </CButton> 
                    </BtnWrapper>

                </GetInTouchWrapper>

            </GetInTouchSectionContainer>
        </>
    )
}

export default GetInTouchSection

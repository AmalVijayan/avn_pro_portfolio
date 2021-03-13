import React, { useState }from 'react'
import {
    SectionContainer,
    SectionBg,
    VideoBg,
    SectionContent,
    SectionH1,
    SectionP,
    SectionBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeadSectionElements'
import {Button} from '../ScrollButton/ButtonElements'
import Video from '../../videos/video.mov'

const HeadSection = ({OnHover}) => {

    const [hover, setHover] = useState(true);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <SectionContainer >
            <SectionBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mov' />
            </SectionBg>
        
            <SectionContent>
                <SectionH1>
                    "Loyalty is a two-way street.If I'm asking for it from you then you're getting it from me."
                </SectionH1>
                <SectionP>
                    - Harvey Spector
                </SectionP>
                <SectionBtnWrapper>
                    <Button to="req_demo" 
                    // onMouseEnter={ onHover } 
                    // onMouseLeave={ OnHover } 
                    primary='true'
                    dark='true'>
                         Profile {  hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button> 
                </SectionBtnWrapper>
            </SectionContent>
        </SectionContainer>
    )
}

export default HeadSection

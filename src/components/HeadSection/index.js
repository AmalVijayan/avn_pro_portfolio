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
                    Full Stack Developer & Data Scientist
                </SectionH1>
                <SectionP>
                A Software Engineer and a Data Scientist who believes artificial intelligence is the future. A
                technical blogger who likes to help and assist the technology enthusiasts in the field of
                artificial intelligence and machine learning and a free time mentor for those who seek help.
                </SectionP>
                <SectionBtnWrapper>
                    <Button to="req_demo" 
                    // onMouseEnter={ onHover } 
                    // onMouseLeave={ OnHover } 
                    primary='true'
                    dark='true'>
                         Check Experience {  hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button> 
                </SectionBtnWrapper>
            </SectionContent>
        </SectionContainer>
    )
}

export default HeadSection

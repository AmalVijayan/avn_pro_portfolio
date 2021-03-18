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
// import Video from '../../videos/video.mov'
import Video from '../../videos/video2.mp4'

const HeadSection = ({OnHover}) => {

    const [hover, setHover] = useState(true);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <SectionContainer >
            <SectionBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mov' /> */}
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </SectionBg>
        
            <SectionContent>
                <SectionH1>
                    "Loyalty is a two-way street.If I'm asking for it from you then you're getting it from me."
                </SectionH1>
                <SectionP>
                    - Harvey Spector
                </SectionP>
                <SectionBtnWrapper>
                    <Button to='profile' 
                            offset={-50}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            activeClass='active' 
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

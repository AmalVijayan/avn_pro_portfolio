import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
 
export const SectionContainer = styled.div`
    background: #0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 780px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 3;
    }
`;

export const SectionBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    over-flow: hidden;
`;                             

export const VideoBg = styled.video`
    width: 100% ;
    height: 100% ;
    -o-object-fit: cover;
    object-fit: cover;
    background: #23a24;
`;

export const SectionContent = styled.div`
    z-index:3;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
`;

export const SectionH1 = styled.h1`
    color: white;
    font-size: 40px;
    text-align: center;
    
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`;


export const SectionP = styled.p`
    margin-top: 22px;
    max-width: 600px;
    color: white;
    text-align: center;
    font-size: 24px;
    justify-self: center;

     
    @media screen and (max-width: 768px){
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const SectionBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

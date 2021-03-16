import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

export const GetInTouchSectionContainer = styled.div`
    height:auto;
    color: black;
    align-items: center;    
    padding-bottom: 50px;

    // background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606') };

    background: #dbdbdb;

    // border: 3px dashed yellow;

    position: relative;
    z-index: 3;

`;


export const GetInTouchWrapper = styled.div`

    // border: 3px dashed red;
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    @media screen and (max-width: 990px){
        height:auto;
    }

`;


export const SectionHeading = styled.h1`
    text-align:center;
    color: black;
    font-size: 30px;
    line-height: 30px;
    font-weight: 600px;
    // letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 60px;
    margin-bottom: 60px;

    @media screen and (max-width: 1130px){
        font-size: 25px;

    }


`;

export const GetInTouchRow = styled.div`
    z-index: 10;
    // border: 3px dashed blue;
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: repeat(1,600px);  /* 3 columns */
    grid-template-rows: repeat(1,400px); /* 3 rows  */

    // grid-gap: 25px 25px; /* 50 pixels of space added between rows and 30 pixels added between columns  */
    padding: 10px;

    @media screen and (max-width:635px){
        grid-template-columns: repeat(1,auto);  /* 3 columns */
        grid-template-rows: repeat(1,auto); /* 3 rows  */
    }

`;


export const GetInTouchCell = styled.div`
animation: 2s ${bounceAnimation};

    margin: 0 auto 0 auto;
    padding: 5px;
    // grid-area: col;
    // border: 3px dashed green;
    height: 100%;
    width:100%;
    background: black;

    // &:hover{
    //     transform: scale(1.1);
    //     transition: all 0.2s ease-in-out;
    //     cursor: pointer;
    // }

    // @media screen and (max-width: 410px){
    //     height: auto;
    //     width:auto;
    // }

`;


export const GetInTouchInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    // border: 2px dashed black;
    align-items: center;

    @media screen and (max-width:635px){
        height: auto;
    }
`;


export const GetInTouchImgWrapper = styled.div`
    height: 70%;
    width: 100%;
    margin: 10px auto 10px auto;
    padding: auto;
    // border: 2px dashed red;
`;

export const GetInTouchImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    // border: 2px dashed red;
`;


export const GetInTouchLabel = styled.h1`
    text-align:center;
    color: white;
    font-size: 20px;
    line-height: 16px;
    font-weight: 600px;
    // letter-spacing: 1px;
    // margin-top: 60px;
`;


export const GetInTouchDescription = styled.p`
    text-align:center;
    color: #a1a1a1;
    font-size: 15px;
    line-height: 16px;
    font-weight: 600;
    // letter-spacing: 1px;
    margin-top: 20px;
`;


export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    // border: 3px dashed red;
    justify-content: center;
`;

export const CButton = styled.button`
    width: 50%;
    color:white;
    background: black;
    height:40px;
    margin: 3px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid black;

    &:hover{
        color:black;
        background: gold;
        border: 1px solid black;
    }

    @media screen and (max-width: 360px){
        height: auto;
        width: 100%;

    }
`;
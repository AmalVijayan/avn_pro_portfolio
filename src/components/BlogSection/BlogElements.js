import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInDown } from 'react-animations';

const fadeAnimation = keyframes`${fadeInLeft}`;

export const BlogSectionContainer = styled.div`
    height:auto;;
    color: black;
    align-items: center;    
    padding-bottom: 50px;

    // background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606') };

    background: #dbdbdb;

    // border: 3px dashed yellow;

    position: relative;
    z-index: 3;

`;


export const BlogsWrapper = styled.div`

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
    line-height: 16px;
    font-weight: 600px;
    // letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 60px;
    margin-bottom: 60px;


`;

export const BlogRow = styled.div`
    z-index: 10;
    // border: 3px dashed blue;
    display: grid;

    grid-template-columns: repeat(3,500px);  /* 3 columns */
    grid-template-rows: repeat(2,400px); /* 3 rows  */
    grid-gap: 25px 25px; /* 50 pixels of space added between rows and 30 pixels added between columns  */
    margin: 0 auto 60 auto;
    padding: 10px;

    @media screen and (max-width:1600px){
        grid-template-columns: repeat(2,500px);  /* 3 columns */
        grid-template-rows: repeat(3,400px); /* 3 rows  */
    }

    @media screen and (max-width: 1130px){
        grid-template-columns: repeat(1,500px);  /* 3 columns */
        grid-template-rows: repeat(6,400px); /* 3 rows  */
    }

    @media screen and (max-width: 540px){
        grid-template-columns: repeat(1,auto);  /* 3 columns */
        grid-template-rows: repeat(6, ); /* 3 rows  */
        margin: 0 auto 0 auto;
    }
`;


export const BlogCell = styled.div`
animation: 2s ${fadeAnimation};

    // margin-bottom: 15px;
    margin: 0 auto 0 auto;
    padding: 10px;
    // grid-area: col;
    // border: 3px dashed green;
    height: 100%;
    width:100%;
    background: white;

    box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);
    -webkit-box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);
    -moz-box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const BlogInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    // border: 2px dashed black;
    align-items: center;
`;


export const ArticleImgWrapper = styled.div`
    height: 60%;
    width: 100%;
    margin: 10px auto 10px auto;
    padding: auto;
    // border: 2px dashed red;
`;

export const ArticleImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    // border: 2px dashed red;
`;

export const TitleWrapper= styled.div`
    width: 100%;
    height: auto;
    border: 2px dashed green;
    padding:0;
    margin-bottom:3px;
`;


export const ArticleTitle = styled.h1`
    text-align:left;
    color: black;
    font-size: 25px;
    // line-height: 20px;
    font-weight: 600px;
    // letter-spacing: 1px;
    // margin-top: 60px;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    max-height: 70px;
    border: 2px dashed green;
    padding:0;
    overflow:hidden;
    text-decoration: none;
    text-overflow: ellipsis;


`;

export const ArticleDescription = styled.p`
    text-align:left;
    color: #a1a1a1;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    // letter-spacing: 1px;
    margin-top: 5px;
`;


export const ArticleLink = styled.a`
    text-decoration: none;
`;


export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    // border: 3px dashed red;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0;
`;

export const CButton = styled.button`
    width: 150px;
    color:white;
    background: black;
    height:40px;
    margin: 3px;
    font-size: 20px;
    cursor: pointer;
    border: none;
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
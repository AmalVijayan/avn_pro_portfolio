import styled from 'styled-components'


export const ServiceSectionContainer = styled.div`
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


export const ServicesWrapper = styled.div`
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

export const ServiceRow = styled.div`
    z-index: 10;
    // border: 3px dashed blue;
    display: grid;

    grid-template-columns: repeat(3,300px);  /* 3 columns */
    grid-template-rows: repeat(2,300px); /* 3 rows  */
    grid-gap: 25px 25px; /* 50 pixels of space added between rows and 30 pixels added between columns  */
    margin: 0 auto 60 auto;
    padding: 10px;

    @media screen and (max-width:990px){
        grid-template-columns: repeat(2,300px);  /* 3 columns */
        grid-template-rows: repeat(3,300px); /* 3 rows  */
    }

    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1,300px);  /* 3 columns */
        grid-template-rows: repeat(6,300px); /* 3 rows  */
    }

    @media screen and (max-width: 320px){
        grid-template-columns: repeat(1,260px);  /* 3 columns */
        grid-template-rows: repeat(6,320px); /* 3 rows  */
        margin: 0 auto 0 auto;
    }
`;


export const ServiceCell = styled.div`
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
`;

export const ServiceInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    // border: 2px dashed black;
    align-items: center;
`;


export const ServiceImgWrapper = styled.div`
    height: 50%;
    width: 50%;
    margin: 10px auto 10px auto;
    padding: auto;
    // border: 2px dashed red;
`;

export const ServiceImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    // border: 2px dashed red;
`;


export const ServiceTitle = styled.h1`
    text-align:center;
    color: black;
    font-size: 20px;
    line-height: 16px;
    font-weight: 600px;
    // letter-spacing: 1px;
    // margin-top: 60px;
`;


export const ServiceDescription = styled.p`
    text-align:center;
    color: #a1a1a1;
    font-size: 15px;
    line-height: 16px;
    font-weight: 600;
    // letter-spacing: 1px;
    margin-top: 20px;
`;
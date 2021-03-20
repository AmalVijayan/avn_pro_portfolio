import styled,{ keyframes } from 'styled-components'
import { rotateIn, bounce } from 'react-animations';
const rotateAnimation = keyframes`${rotateIn}`;
const bounceAnimation = keyframes`${bounce}`;


export const InventorySectionContainer = styled.div`
    height:auto;;
    color: black;
    align-items: center;    
    padding-bottom: 50px;

    // background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606') };

    background: white;

    // border: 3px dashed yellow;

    position: relative;
    z-index: 3;

`;


export const InventorysWrapper = styled.div`
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

export const InventoryRow = styled.div`
 
    z-index: 10;
    // border: 3px dashed blue;
    display: grid;

    grid-template-columns: repeat(5,180px);  /* 3 columns */
    grid-template-rows: repeat(6,180px); /* 3 rows  */
    grid-gap: 15px 15px; /* 50 pixels of space added between rows and 30 pixels added between columns  */
    margin: 0 auto 0 auto;
    padding: 5px;

    @media screen and (max-width:990px){
        grid-template-columns: repeat(4,180px);  /* 3 columns */
        grid-template-rows: repeat(auto,180px); /* 3 rows  */
    }

    @media screen and (max-width: 770px){
        grid-template-columns: repeat(3,180px);  /* 3 columns */
        grid-template-rows: repeat(auto,180px); /* 3 rows  */
    }

    @media screen and (max-width: 590px){
        grid-template-columns: repeat(2,180px);  /* 3 columns */
        grid-template-rows: repeat(auto,180px); /* 3 rows  */
    }

    @media screen and (max-width: 390px){
        grid-template-columns: repeat(2,120px);  /* 3 columns */
        grid-template-rows: repeat(auto,120px); /* 3 rows  */
        margin: 0 auto 0 auto;
    }

    @media screen and (max-width: 270px){
        grid-template-columns: repeat(2,100px);  /* 3 columns */
        grid-template-rows: repeat(auto,100px); /* 3 rows  */
        margin: 0 auto 0 auto;
    }
`;


export const InventoryCell = styled.div`

    // margin-bottom: 15px;
    margin: 0 auto 0 auto;
    padding: 10px;
    // grid-area: col;
    // border: 3px dashed green;
    height: 100%;
    width:100%;
    background: white;
    // box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);
    // -webkit-box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);
    // -moz-box-shadow: 0px 0px 13px 4px rgba(122,122,122,1);
    
`;

export const InventoryInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    // border: 2px dashed black;
    align-items: center;
`;


export const InventoryImgWrapper = styled.div`
animation: 3.2s ${rotateAnimation};

    height: 60%;
    width: 68%;
    margin: auto; 
    padding: auto;
    // border: 2px dashed red;
    align-items:center;

   
`;

export const InventoryImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    // border: 2px dashed red;
    margin:auto;

    &:hover{
        animation: 3.2s ${bounceAnimation};
    }
`;


export const InventoryTitleWrapper = styled.div`
    height: 20%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InventoryTitle = styled.h1`
    color: black;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600px;
    margin: auto;

    
    @media screen and (max-width: 390px){
      text-align:center;
    }
`;


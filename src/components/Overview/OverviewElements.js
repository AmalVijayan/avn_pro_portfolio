import styled from 'styled-components'

export const OverviewSectionContainer = styled.div`

    height:860px;
    color: black;

    // background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606') };
    background: 'white';

    padding: 10px;

    // border: 3px dashed yellow;

    position: relative;
    z-index: 3;

    @media screen and (max-width: 760px){
        padding: 10px 0;
        height: 1250px;
    }

    @media screen and (max-width: 610px){
        padding: 10px 0;
        height: auto;
    }
`;

export const OverviewWrapper = styled.div`
    // border: 3px dashed red;
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    // max-width : 1100px;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;


export const OverviewRow = styled.div`
    z-index: 10;
    // border: 3px dashed blue;
    display: grid;
    grid-auto-columns: minmx(auto, 1fr);
    align-items: center;
    width:100%;
    grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col1 col2'` : `'col2 col1'`)};
    height: auto;
    @media screen and (max-width: 760px){
        grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        height: auto;
    }
`;


export const Column1 = styled.div`
    // margin-bottom: 15px;
    margin: 0 auto 0 auto;
    padding: 10px;
    grid-area: col1;
    // border: 3px dashed green;

`;


export const ImgWrap = styled.div`
    max-width: 350px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10%;

    object-fit: cover;
`;

export const Column2 = styled.div`
    // margin-bottom: 15px;
    margin: 0 auto 0 auto;

    padding: 10px;
    grid-area: col2;
    // border: 3px dashed orange;
    margin-left: ${({ imgStart }) => ( imgStart ? '30px' : '0')};

    @media screen and (max-width: 760px){
        margin:auto;
    }
`;


export const TextWrapper  = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:10px;

`;


export const TopLine  = styled.h1`
    color: black;
    font-size: 30px;
    line-height: 16px;
    font-weight: 600px;
    // letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    // max-width: 100%;
    font-size: 20px;
    line-height: 1.1;
    // font-weight: 600px;
    margin-bottom: 25px;    
    color: ${({ lightText }) => ( lightText ? '#434f46' : '#2b332d')};

    @media screen and (max-width: 480px){
        font-size: 17px;
    }
`;

export const SubHeading = styled.p`
    max-width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#2b332d' : '#434f46' )};
`;

export const Skills = styled.div`
    max-width: 100%;
    padding: 10px;
    // border: 3px dashed brown;
    margin-bottom: 20px;
`;


export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin: 0 auto 0 auto;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    // border: 3px dashed blue;

`;

export const SkillsIcons = styled.div`
margin: 0 auto 0 auto;

    align-items: center;
    // width: 100%;
    // border: 3px dashed green;
    color: ${({ lightText }) => ( lightText ? '#FFFF' : '#010606')};


`;

export const SkillsItem = styled.div`
    margin-bottom : 10px;    

    display: flex;
    justify-content: space-evenly;
    flex: 1; 
    word-wrap:break-word;


`;

export const  StartRating = styled.div`
    margin-left: 20px;
    max-width: 160px;
    // border: 3px dashed red;
    flex: 1; 
    word-wrap:break-word;

    &:hover{
        color: gold;
    }

    @media screen and (max-width: 762px){
        color: gold;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    // border: 3px dashed red;

    @media screen and (max-width: 360px){
        flex-direction: column;
        height: 80px;
    }
`;

export const CButton = styled.button`
    width: 50%;
    color:white;
    background: black;
    height:40px;
    margin: 3px;
    font-size: 20px;
    cursor: pointer;
    border: none;

    &:hover{
        color:black;
        background: gold;
    }

    @media screen and (max-width: 360px){
        height: auto;
        width: 100%;

    }
`;

export const SocialMedia = styled.section`
    max-width: 100%;
    width: 100%;
    // border: 3px dashed yellow;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    // border: 3px dashed blue;

`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    // border: 3px dashed green;

`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    // border: 3px dashed red;

`;


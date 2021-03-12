import styled from 'styled-components'

export const BioSectionContainer = styled.div`
    height:800px;
    color: white;
    height: 800px;

    // background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606') };
    // background: '#6C63FF';
    background-image: linear-gradient(to bottom, #0a0645, #00205c, #003670, #004d82, #006492, #00719b, #057ea2, #188ba9, #1292ad, #0e99b0, #0f9fb2, #14a6b4);
    background-image: linear-gradient(to bottom, #000000, #0a0a0a, #121212, #181818, #1e1e1e, #212122, #232427, #25272b, #21282f, #1a2a31, #112b32, #062d30);
    padding: 10px;
    // border: 3px dashed yellow;

    position: relative;
    z-index: 3;

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


    @media screen and (max-width: 768px){
        padding: 10px 0;
        height: 850px;
    }
`;

export const BioWrapper = styled.div`
// border: 3px dashed red;
z-index: 10;

    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width : 1100px;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const BioRow = styled.div`
z-index: 10;

// border: 3px dashed blue;

    display: grid;
    grid-auto-columns: minmx(auto, 1fr);
    align-items: center;
    // grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col2 col1'` : `'col1 col2'`)};
    grid-template-areas: 'col2 col1 col3';
    @media screen and (max-width: 760px){
        grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    // border: 3px dashed green;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    // border: 3px dashed green;

`;


export const TextWrapper  = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:10px;

`;


export const TopLine  = styled.p`
    color: #31A1B5;
    font-size: 17px;
    line-height: 16px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    max-width: 100%;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 600px;
    margin-bottom: 24px;    
    color: ${({ lightText }) => ( lightText ? '#f78fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const SubHeading = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#ffff' )};
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

export const ImageBg = styled.img`
    width: 100% ;
    height: 100% ;
    -o-object-fit: cover;
    object-fit: cover;
    background: #23a24;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
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
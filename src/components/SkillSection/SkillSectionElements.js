import styled from 'styled-components'

export const SkillSectionContainer = styled.div`
    color: white;
    height: 1000px;

    background: ${({ lightBg }) => ( lightBg ? '#a7a2fc' : '#0a0645') };
    padding: 40px 0;
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


    @media screen and (max-width: 762px){
        padding: 10px 0;
        height: 1600px;
    }
`;

export const SkillWrapper = styled.div`
// border: 3px dashed red;
z-index: 10;

    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width : 1100px;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const SkillRow = styled.div`
z-index: 10;
// border: 3px dashed blue;
border-radius: 22px;
    margin-bottom: 20px;
    display: grid;
    grid-auto-columns: minmx(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col2 col1'` : `'col1 col2'`)};
    grid-template-areas: 'col2 col1';


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
    color: ${({ lightText }) => ( lightText ? '#FFFF' : '#010606')};
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

export const ImgWrap = styled.div`
    max-width: 300px;
    height: 100%;
    self-align: right;
`;

export const Img = styled.img`
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10%;
    height: 250px;
    object-fit: cover;
`;

export const Inventory = styled.section`
    max-width: 100%;
    width: 100%;
    // border: 3px dashed yellow;

`;

export const InventoryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    // margin: 0 auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    // border: 3px dashed blue;

`;

export const InventoryIcons = styled.div`
    align-items: center;
    width: 100%;
    // border: 3px dashed green;
    color: ${({ lightText }) => ( lightText ? '#FFFF' : '#010606')};


`;

export const InventoryItem = styled.div`
    margin-bottom : 10px;    

    display: flex;
    justify-content: space-evenly;
    flex: 1; 
    word-wrap:break-word;


`;

export const  StartRating = styled.div`
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

export const ItemsList = styled.ul`
    font-size: 22px;
    font-weight: 600;
    margin-left: 20px;
`;
export const ListItem = styled.li`
    text-decoration: none;
    // list-style: none;
    margin-bottom: 7px;
`;

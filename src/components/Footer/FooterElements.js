import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
    // border: 3px dashed white;
    background-color: black;     
    height: 80px;
    
    @media screen and (max-width : 850px ){
        padding: 10px;

        height: 200px;

    }
`;

export const FooterWrapper = styled.div`
    // border: 3px dashed red;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export const SocialMedia = styled.section`
    // border: 3px dashed white;
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrapper = styled.div`
    // border: 3px dashed white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 850px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    font-weight: bold;

    @media screen and (max-width : 850px ){
        margin-bottom: 20px;


    }
`;


export const CopyRightTag = styled.small`
    color: #fff;
    text-align: center;
`;

export const SocialIcons = styled.div`
    // border: 3px dashed red;

    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 150px;
    margin: 20px; 
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
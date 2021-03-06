import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'black' : 'black' )};
    height: 80px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 700px){
        margin-top: -80px;
    }

    `;

export const NavContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-indez: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    // border: 2px dashed white;
`;

export const NavLogo = styled(LinkR)`
// border: 2px dashed white;

    color: #ffff;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    font-weight: bold;
    `;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        align-self: center;
        position: absolute;
        margin: 20px;
        top:0;
        right: 0;
        text-align: center;
        transition: translate(-100%, 60%);
        cursor: pointer;
        font-size: 1.8rem;
        color: white;
        // border: 2px dashed white;
    } `;

export const NavMenu = styled.ul`
    // display: flex;
    display: ${({ showScrollMenu }) => ( showScrollMenu ? 'flex' : 'none') };
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px)
    {
        display: none;
    }
    `;

export const NavItem = styled.li`
    height: 80px;
    `;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    
    &.active{
        border-top: 5px solid white;
        transition: scale(1rem);
    }
    `;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }

    @media screen and (min-width: 768px){
        margin: auto 20px auto 0;
    }
    `;

export const NavBtnLink = styled(LinkR)`
    cursor: pointer;
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 10px 22px;
    color: #0a0645;
    font-size: 16px;
    outline: none;
    border: 2px solid black;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: black;
        color: white;
        border: 2px solid white;
    }
    `;

export const NavBtnWrapper = styled.div`

    // border: 2px dashed white;
    display: flex;
    width : auto;
    justify-content: space-between;

`;


export const HomeIconLink =styled(LinkR)`
    display:none;
    @media screen and (min-width: 768px){
        display: ${({ showHomeIcon }) => (showHomeIcon ? 'grid' : 'none' )};
        color: #fff;
        font-size: 40px;
        text-align: center;
        // border: 3px dashed red;
        justify-self: center;
        margin:auto;
    }
`;


export const TechstackIconWrapper =styled.div`
    margin: auto 20px auto 20px;
    color: white;

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;
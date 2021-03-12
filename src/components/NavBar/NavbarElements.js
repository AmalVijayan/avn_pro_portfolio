import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#0a0645' : 'transparent' )};
    height: 80px;
    margin-top: -80px;
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
    `;

export const NavContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-indez: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `;

export const NavLogo = styled(LinkR)`
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
        // position: absolute;
        // top:0;
        // right: 0;
        transition: translate(-100%, 60%);
        cursor: pointer;
        font-size: 1.8rem;
        color: white;
    } `;

export const NavMenu = styled.ul`
    display: flex;
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
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: black;
        color: white;
    }
    `;
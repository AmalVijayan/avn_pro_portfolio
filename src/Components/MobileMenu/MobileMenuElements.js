import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const MobileMenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    background: black;
    top: 0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0': '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: white;
font-size:35px;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size; 2rem;
    cursor: pointer;
    outline: none;
`

export const MobileMenuItemsWrapper = styled.div`
    height: auto;
`

export const MobileMenuItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;

`

export const MobileMenuLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    font-weight:600;
    cursor: pointer;

    &:hover {
        color: green;
        transition: 0.2s ease-in-out;
    }
`

export const MobileMenuButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width:300px){
        display: grid;
    }
`

export const MobileMenuButtons = styled(LinkR)`
    border-radius: 50px;
    background: black;
    white-space: nowrap;
    padding: 16px 64px;
    color: white;
    font-size: 14px;
    font-weight:600;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;    
    transition: 0.2s ease-in-out;

    &:hover {
        color: black;
        background: white;
        transition: 0.2s ease-in-out;
    }

`
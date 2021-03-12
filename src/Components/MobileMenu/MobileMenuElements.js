import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const MobileMenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:  #0a0645;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`


export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
`

export const MobileMenuItemsContainer = styled.div`
    color: #fff;
`

export const MobileMenuItem = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 12px);
    text-align: center;

    @media screen and (max-widht: 480px){
        grid-template-rows: repeat(6, 10px);
    }

`

export const MobileMenuLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    link-style: none;
    transition: 0.8s ease-in-out;
    color: #fff;
    cusrsor: pointer;

    &:hover{
        color: white;
        transition: 0.2s ease-in-out;

    }
`
export const MobileMenuItemBtn = styled.div`
    display:flex;
    justify-content: center;
`

export const MobBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 16px 64px;
    color: #0a0645;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

`
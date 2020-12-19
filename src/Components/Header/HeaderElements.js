import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #767674;
    align-items: center;
    justify-content: space-between;
    border: 2px dashed black;

@media screen and (max-width:580px){
    display: flex;
}
`
export const HeaderTitle = styled(LinkR)`
    min-width: 10%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px dashed black;
    text-decoration: none;

@media screen and (max-width:580px){
    display:none;
}
`

export const HeaderTitleMobile = styled(LinkR)`
    min-width: 35%;
    margin-left: 20px;
    display: none;
    align-items: center;
    justify-content: space-evenly;
    border: 2px dashed black;
    text-decoration: none;

@media screen and (max-width:580px){
    display:block;
}
`

export const HeaderMenu = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
text-align: center:
height: 100%;
min-width: 25%;
margin-left: 2%;

@media screen and (max-width:1000px){
    display: none;
}
`

export const HeaderMenuItem = styled.li`
height: 80px;
display: flex;
align-items: center;
margin-right: 5px;

`
export const HeaderMenuLinks = styled(LinkS)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
height: 70%;
font-weight: 500;
font-size: 14px;
cursor: pointer;
border-top: 2px solid white;


&.active {
    border-top: 5px solid black;
    color: black;
}
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:1000px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const HeaderBtnPane = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-right: 5%;

@media screen and (max-width:1000px){
    display: none;
}
`

export const HeaderBtn = styled.nav`
display:flex;
align-items: center;
margin-left: 10px;

@media screen and (max-width:1000px){
    display: none;
}
`

export const HeaderBtnLinks = styled(LinkR)`
border-radius:50px;
background: black;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 14px;
outline: none;
border: 2px dashed yellow !important:
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
}

@media screen and (max-width:1000px){
    display: none;
}
`
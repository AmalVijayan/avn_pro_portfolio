import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
    border-radius : 50px;
    background: ${({primary}) => (primary ? 'white' : 'black')};
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '14px 48 px' : '12px 38px')};
    color: ${({ dark }) => ( dark ? 'black' : '#fff')};
    font-size: ${({ fontBig }) => ( fontBig ? '20px' : '16px')};
    outline:none;
    border: 2px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;

    &:hover{
        transition: 0.2s all ease-in-out;
        background: ${({primary}) => (primary ? 'black' : 'white')};
        color: white;
        border: 2px solid white;
    }
`
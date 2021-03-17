import styled from 'styled-components'

export const EmailInp = styled.input`
    width: 50%;
    height: 35px;
    margin-bottom: 15px;
    font-size: 25px;
    padding: 0 5px 0 5px;
`;
export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    // border: 3px dashed red;
    justify-content: center;
`;

export const CButton = styled.button`
    width: 30%;
    color:white;
    background: black;
    height:40px;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid white;

    &:hover{
        color:black;
        background: gold;
        border: 1px solid white;
    }

    @media screen and (max-width: 360px){
        height: auto;
        width: 100%;

    }

    &:disabled{
        background: grey;
        cursor: not-allowed;
    }
`;
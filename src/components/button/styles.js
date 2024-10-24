import styled from "styled-components"

export const ButtonContainer = styled.button`
    margin-top: 3px;
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #BB0A00;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.7;  
    }

    &:active {
        background-color: #800800;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Main = styled.main`
    background-color: #00000077;
    box-shadow: 0 0 50px #FFFFFF99;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    display: flex;
    margin:auto;
    width: 50%;

    img {
        width: 8em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
`

export const InvalidData = styled.p`
    text-align: center;
    color: #FF0000;
    font-size: 0.9em;
    margin-bottom: 1em;
`


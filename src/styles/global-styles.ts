import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
    }

    body {
        background-image: url('https://cdn.pixabay.com/photo/2020/04/12/20/37/abstract-5035778_1280.jpg');
        background-repeat: no-repeat; 
        background-size: cover; 
        color: #FFFFFF;
      }

    button {
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    input {
        border: none;
        outline: none;
        background: transparent;
        font-family: 'Open Sans';
        color: #FFFFFF;
    }
`

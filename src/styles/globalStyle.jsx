import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --bg: #E2F3F3;
        --letter: #16359F;
        --authorColor: black;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1080px){
            font-size:93.75%;
        }
        @media (max-width:728px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--bg);
        -webkit-font-smoothing: antialiased;
        max-width: 80vw; 
        margin: 0 auto; 
        padding: .5vw 0vw;
    }

    body, input, button, textarea {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
        color: var(--letter);
    }
`;

export default GlobalStyle;
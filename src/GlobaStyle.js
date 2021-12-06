import {createGlobalStyle} from 'styled-components'



export const GlobalStyle=createGlobalStyle`
    *{
        font-family: sans-serif;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html{
        font-size: 62.5%;

    }
    body{
        overflow-x: hidden;
        background-color: #000000;
    }


`
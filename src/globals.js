import { createGlobalStyle } from 'styled-components';
import sijaLogo from "./assets/img/sija-opacity-down.png";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        height: 100vh;
        width: 100vw;
        background: url(${sijaLogo});
        background-size: 600px 400px;                      
        background-repeat: no-repeat;
        background-position: center center;   
        background-attachment: fixed;
        overflow-x: hidden;
        
        /* &:before {
            z-index: -1;
            content: "SMKN 26 JAKARTA";
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10rem;
            font-weight: bold;
            color: transparent;
            -webkit-text-stroke: 1px #555;
        } */
    }

    .underline {
        text-decoration-line: underline;
        text-decoration-style: "solid";
        text-decoration-color: #0587FF;
        text-decoration-thickness: 5px;
    }
`

export const GlobalColors = {
    blue: "#0587FF",
    black: "#202020",
    grey: "#353535",
    white: "#FFF",
}

export const GlobalMeasurements = {
    navbarHeight: 100,
    containerWidth: 1300,
    navbarFontSize: 1.75,
}

export const GlobalFonts = {
    primary: 'Playfair Display',
    secondary: 'Raleway',
}
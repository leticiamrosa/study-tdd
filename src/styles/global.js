import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 62.5%;
    }

    body {
        background: #7159c1;
        -webkit-font-soothing: antialiased !important;
    }
`;

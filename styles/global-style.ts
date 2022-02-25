import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #__next {
        width: 100%;
        height: 100%;
    }
`
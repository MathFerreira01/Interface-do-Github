import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: var(--primary);
    }

    *, button, input {
        transition: color .2s ease-out;

        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        color: var(--black);

        
    }

    ul {
        list-style: none;
    }

    :root {
        ${props => {
            const theme = props.theme

            let append = ''
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}: ${value};`;
            })

            return append
        }}
    }
`;
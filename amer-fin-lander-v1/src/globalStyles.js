import { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', 'Lato', sans-serif;
    }

    .green {
        color: #53AF2A;
    }

    h2 span.green {
        color: #53AF2A;
        font-weight: bold;
        padding-left: 10px;
    }
`;
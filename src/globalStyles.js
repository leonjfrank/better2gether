import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    html, body, #root {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        background-color: #212121;
    }
   
    html::-webkit-scrollbar, body::-webkit-scrollbar, #root ::-webkit-scrollbar {
        display: none;
    }

    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

//AQUI COLOQUEI OS STYLES GLOBAIS PARA PADRONIZAR A APLICACAO

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    :root {
        --orange-dark: #BC4124;
        --orange-light: #E7946D;
        --brown: #5B1206;
        --white: #FFFFFF;
        --black-opacity: #000000d6;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;

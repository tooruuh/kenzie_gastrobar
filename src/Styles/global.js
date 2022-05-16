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
        --orange-dark:              #BC4124;
        --orange-light:             #E7946D;
        --orange-60:   rgb(231,148,109,0.6);
        --brown:                    #5B1206;
        --brown-light:              #F4EDE6;
        --orange-darker:            #AB2E1B;
        --grey:                     #09101D;
        --black:                    #000000;
        --white:                    #FFFFFF;
        --red:                 rgb(255,0,0);
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;

import styled, {createGlobalStyle} from "styled-components";
import Fundo from '../images/bg-copy2.jpg'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
body{
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 120%;
    background-position: center;
}

`
import {createGlobalStyle} from "styled-components";
import mapa from "../img/mapa.png"


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #767575;
    background-image: url(${mapa});
    background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
    background-size: cover;
    height: 100VH;
    width: 100%;
    margin: auto;

    display: flex;
align-items: center;
justify-content: center;
}
`
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    
}
body{
    color: white;
    letter-spacing:  -1px;
    word-break: break-all;
    background-color: gray;
    
}
a{
    text-decoration: none;
    color: white;
}
ul{
    list-style: none;
}
`;

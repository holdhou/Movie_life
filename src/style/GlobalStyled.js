import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    
}
body{
    
    letter-spacing:  -1px;
    word-break: break-all;
      font-family: "Noto+Sans+KR",sans-serif;
      margin: 0 5% 0 5%;
}
a{
    text-decoration: none;
    color: black;
}
ul{
    list-style: none;
}
`;

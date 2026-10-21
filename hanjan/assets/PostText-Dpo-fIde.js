import{r as a,j as e}from"./index-_cfjkTGx.js";function r({text:s}){const[t,o]=a.useState(!1),n=s.length>140||s.split(`
`).length>4;return e.jsxs("div",{className:"ptext",children:[e.jsx("p",{className:`post-text ${n&&!t?"clamp":""}`,children:s}),n&&e.jsx("button",{type:"button",className:"more",onClick:()=>o(!t),children:t?"접기":"더 보기"})]})}export{r as P};

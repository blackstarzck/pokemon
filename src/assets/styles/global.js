import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* reset */
  html,body,h1,h2,h3,h4,h5,h6,div,p,blockquote,pre,code,address,ul,ol,li,nav,section,article,header,footer,main,aside,dl,dt,dd,table,thead,tbody,tfoot,label,caption,th,td,form,fieldset,legend,hr,input,button,textarea,object,figure,figcaption,svg {margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);}
  body,input,select,textarea,button,img,fieldset {border:none;}
  ul,ol,li{list-style:none;}
  table{width:100%;border-spacing:0;border-collapse:collapse;}
  address,cite,code,em,i{font-style:normal;font-weight:normal;}
  label,input,select,textarea,button,a {vertical-align:middle;}
  u,ins,a{text-decoration:none;}
  a{color: inherit;}
  button { cursor: pointer;background-color: inherit; }
  img {vertical-align: top;}
  b { font-weight: inherit }

  /* Normalize */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { font-size: 16px;color: #444444; font-family: 'Inter', sans-serif;-webkit-font-smoothing: antialiased;-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;position: relative; }
  select { appearance:none;}
  select::-ms-expand { display:none;}
  input { outline: none; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration,
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button { -webkit-appearance:none;}
  input[type="number"]{ -moz-appearance:textfield;}
  input[type="number"],
  input[type="text"],
  input[type="password"],
  input[type="url"],
  input[type="email"],
  input[type="tel"],
  input[type="date"], 
  textarea { -webkit-appearance:none; -moz-appearance:none; appearance:none;outline:0;}
  textarea { resize: none;}

  .bug       { background-color: ${ props => props.theme.symbols.bug } }
  .dragon    { background-color: ${ props => props.theme.symbols.dragon } }
  .Fairy     { background-color: ${ props => props.theme.symbols.Fairy } }
  .fire      { background-color: ${ props => props.theme.symbols.fire } }
  .ghost     { background-color: ${ props => props.theme.symbols.ghost } }
  .ground    { background-color: ${ props => props.theme.symbols.ground } }
  .normal    { background-color: ${ props => props.theme.symbols.normal }; color: #444444 }
  .psychic   { background-color: ${ props => props.theme.symbols.psychic } }
  .steel     { background-color: ${ props => props.theme.symbols.steel } }
  .dark      { background-color: ${ props => props.theme.symbols.dark } }
  .electric  { background-color: ${ props => props.theme.symbols.electric }; color: #444444 }
  .fighting  { background-color: ${ props => props.theme.symbols.fighting } }
  .flying    { background-color: ${ props => props.theme.symbols.flying } }
  .grass     { background-color: ${ props => props.theme.symbols.grass } }
  .ice       { background-color: ${ props => props.theme.symbols.ice }; color: #444444 }
  .poison    { background-color: ${ props => props.theme.symbols.poison } }
  .rock      { background-color: ${ props => props.theme.symbols.rock } }
  .water     { background-color: ${ props => props.theme.symbols.water } }
`

export default GlobalStyle
import { createGlobalStyle } from "styled-components"
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf"
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf"


export const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}


@font-face {
    font-family: 'Source Sans Pro light';
    src: local('Source Sans Pro light'), url(${fontLight}) format("truetype");
    font-display: swap; 
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${fontRegular}) format("truetype");
    font-display: swap; 
    font-style: normal;
}

body{
    font-family: "Source Sans Pro", sans-serif;
    overflow-x: hidden;
}


:root{
    --fontBig: 7em;
    --fontxxxl: 5.5em; 
    --fontxxl: 3.4375em; 
    --fontxl: 2.75em; 
    --fontlg: 1.9375em; 
    --fontmd: 1.375em; 
    --fontsm: 1.125em; 
    --fontxs: 1em;
    --fontxxs: 0.75em; 


  // Colors
    --dark: #000000;
    --grey: #666666;
    --greyLight: #979797;
    --offWhite: #eeeeee;
    --white: #ffffff;
    --blue: #0071e3;
    --blueRgba:"0, 113, 227";

  //fonts
    --fontL: "Source Sans Pro light";
    --fontR: "Source Sans Pro";
    
  // gradient
    --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;


`
import { createGlobalStyle } from "styled-components";
import BRSonomaBold from "./assets/fonts/BRSonoma-Bold-BF654c4526823f5.woff";
import BRSomaRegular from './assets/fonts/BRSonoma-Regular-BF654c45266c042.woff'
import BRSomaMedium from './assets/fonts/BRSonoma-Medium-BF654c45266edd1.woff'

export const GlobalStyles = createGlobalStyle`
:root { 
    --color-blue-berry: #4F4FFF;
    --color-red: #FF1C44;
    --color-green-aqua: #7DF0BA; 
    --color-black : #141938;
    --color-grey-1: #7981B2;
    --color-neutral-N0 : #FFFFFF;
    --color-grey-100 : #03050F;
    --color-grey-110 :  #0a051e;
    --color-grey-60: #5E6488;
    --color-grey-30 : #CCD1EE;
    --color-grey-40:  #AEACF359;
    --color-neutral-n11: #f8f9ff;
    --color-gray-50 : #aeacf340;
    --color-gray-60 : #D7DBF5;
    --color-grey:  #5f6368;
} 

@font-face {
    src: url(${BRSomaRegular}) format('woff2'),
        url(${BRSomaRegular}) format('woff');

    font-family: BR-Regular    
}

@font-face {
    src: url(${BRSonomaBold}) format('woff2'),
        url(${BRSonomaBold}) format('woff');

    font-family: BR-Bold    
}

@font-face {
    src: url(${BRSomaMedium}) format('woff2'),
        url(${BRSomaMedium}) format('woff');

    font-family: BR-Medium    
}
`;

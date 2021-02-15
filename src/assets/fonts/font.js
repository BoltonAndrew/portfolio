import { createGlobalStyle } from 'styled-components';

import BaronBlack from './Baron Neue Black.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Baron';
        src: local('Baron Black'),
        url(${BaronBlack}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
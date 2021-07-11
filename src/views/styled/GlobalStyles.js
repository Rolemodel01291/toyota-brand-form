import { createGlobalStyle } from 'styled-components';

// import toyota_font from './static/font/avenirltstd-black.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Toyota Font';
        src: local('Toyota_font'), local('FontName'),
        url(./static/font/avenirltstd-black.otf') format('otf'),   
    }
`;

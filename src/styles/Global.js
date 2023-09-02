import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import PoppinsMedium from '../fonts/poppins/Poppins-Medium.ttf';
import PoppinsRegular from '../fonts/poppins/Poppins-Regular.ttf';
import InterBold from '../fonts/inter/Inter-Bold.ttf';
import InterBoldItalic from '../fonts/inter/Inter-bold-italic.otf';
import InterMedium from '../fonts/inter/Inter-Medium.ttf';
import InterRegular from '../fonts/inter/Inter-Regular.ttf';
import InterSemiBold from '../fonts/inter/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../fonts/inter/Inter-SemiBold-Italic.otf';
import CoolveticaRegular from '../fonts/coolvetica/Coolvetica-Regular.otf';
import CoolveticaRegularItalic from '../fonts/coolvetica/Coolvetica-Regular-Italic.otf';

// THEMES======================== (start)
export const LIGHT = {
  name: 'light',
  colors: {
    backgroundBody: '#F7F6F9', // основний колір фону (вкладені сторінки: календар, графік, профіль юзера)
    colorBody: '#343434', // основний колір шрифту
    colorAccent: '#111111', // UserProfile, Calendar
    backgroundAccent: '#FFFFFF', // хедер, заголовок календаря
    colorLegendSideBar: 'rgba(52, 52, 52, 0.5)', // легенда сайдбару (мілким шрифтом)
    backgroundSideBar: '#FFFFFF', // фон сайдбару
    colorLabelsUserProfile: '#111111', // Labels UserProfile
    colorLogoTextsSideBar: '#3E85F3', // logo text SideBar
    // ----- Модальні вікна ------
    backgroundModalFields: '#F6F6F6', // поля модалок
    colorLabelModal: 'rgba(52, 52, 52, 0.5)', // Labels модалок
    // ----- Кнопки ------
    colorBtnAddTask: '#111111', // Кнопки додавання таски
    backgroundBtnAddTask: '#E3F3FF', // Кнопки додавання таски
    colorBtnSideBar: 'rgba(52, 52, 52, 0.5)', // Кнопки Сайдбару
    backgroundBtnSideBarHover: '#E3F3FF', // Кнопки сайдбару (ховер)
  },
};

export const DARK = {
  name: 'dark',
  colors: {
    backgroundBody: '#21222C', // основний колір фону (вкладені сторінки: календар, графік, профіль юзера)
    colorBody: '#FFFFFF', // основний колір шрифту
    colorAccent: '#FFFFFF', // UserProfile, Calendar
    backgroundAccent: '#171820', // хедер, заголовок календаря
    colorLegendSideBar: 'rgba(250, 250, 250, 0.3)', // легенда сайдбару (мілким шрифтом)
    backgroundSideBar: '#13151A', // фон сайдбару
    colorLabelsUserProfile: 'rgba(250, 250, 250, 0.3)', // Labels UserProfile
    colorLogoTextsSideBar: '#E3F3FF', // logo text SideBar

    // ----- Модальні вікна ------
    backgroundModalFields: '#171820', // поля модалок
    colorLabelModal: 'rgba(250, 250, 250, 0.3)', // Labels модалок
    // ----- Кнопки ------
    colorBtnAddTask: '#FFFFFF', // Кнопки додавання таски
    backgroundBtnAddTask: '#3E85F3', // Кнопки додавання таски
    colorBtnSideBar: '#FFFFFF', // Кнопки Сайдбару
    backgroundBtnSideBarHover: '#3E85F3', // Кнопки сайдбару (ховер)
  },
};
// THEMES======================== (end)

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsMedium';
        src: local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterBold';
        src: local('InterBold'),
        url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterBoldItalic';
        src: local('InterBold'),
        url(${InterBoldItalic}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBoldItalic';
        src: local('InterSemiBoldItalic'),
        url(${InterSemiBoldItalic}) format('truetype');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'CoolveticaRegular';
        src: local('CoolveticaRegular'),
        url(${CoolveticaRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'CoolveticaRegularItalic';
        src: local('CoolveticaRegularItalic'),
        url(${CoolveticaRegularItalic}) format('opentype');
        font-weight: 400;
        font-style: italic;
    }

    body{
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.backgroundBody};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button, a {
    padding: 0;
    margin: 0;
    border: none;
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
}
`;

import setLang from './lang.js';

const htmlElement = document.documentElement;
(function () {
    const currentTheme = localStorage.getItem('currentTheme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
})();

(function () {
    const activeLang = localStorage.getItem('lang') || 'en';
    setLang(activeLang);
})();

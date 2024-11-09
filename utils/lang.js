const LANG_BTNS = document.querySelectorAll('.theme-lang__change-lang');
const TITLE = document.querySelector('.greeting__title');
const LABEL = document.querySelector('.greeting__title-label');
const LINK = document.querySelector('.greeting__link');

LANG_BTNS.forEach((button) => {
    button.addEventListener('click', (event) => {
        const activeLang = event.target.textContent;
        setLang(activeLang);
    });
});

function setLang(lang) {
    if (lang === 'en') {
        TITLE.textContent = 'Welcome!';
        LABEL.textContent = 'To SuperPuper Calculator';
        LINK.textContent = 'Calculator';
        LANG_BTNS[0].classList.add('active');
        LANG_BTNS[1].classList.remove('active');
        localStorage.setItem('lang', 'en');
    } else {
        TITLE.textContent = 'Вечер в хату!';
        LABEL.textContent = 'В СуперПупер Кальклятор';
        LINK.textContent = 'Калькулятор';
        LANG_BTNS[1].classList.add('active');
        LANG_BTNS[0].classList.remove('active');
        localStorage.setItem('lang', 'rus');
    }
}

export default setLang;

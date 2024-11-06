(function () {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', 'light')
})()


const htmlElement = document.documentElement;
const LIGHT_BTN = document.querySelector('.light')
const DARK_BTN = document.querySelector('.dark')
const NIGHT_BTN = document.querySelector('.night')

LIGHT_BTN.addEventListener('click', (event) => {
    const isLight = event.target.getAttribute('light-mode') === 'true'
    if (!isLight) {
        htmlElement.setAttribute("data-theme", "light");
        event.target.setAttribute("light-mode", "true");
        DARK_BTN.setAttribute("dark-mode", "false")
        NIGHT_BTN.setAttribute('night-mode', 'false')
    }
})

DARK_BTN.addEventListener('click', (event) => {
    const isDark = event.target.getAttribute('dark-mode') === 'true'
    if (!isDark) {
        htmlElement.setAttribute("data-theme", "dark");
        event.target.setAttribute("dark-mode", "true");
        LIGHT_BTN.setAttribute("light-mode", "false")
        NIGHT_BTN.setAttribute('night-mode', 'false')
    }
})

NIGHT_BTN.addEventListener('click', (event) => {
    const isNight = event.target.getAttribute('night-mode') === 'true'
    if (!isNight) {
        htmlElement.setAttribute('data-theme', 'night')
        event.target.setAttribute('night-mode', 'true')
        DARK_BTN.setAttribute("dark-mode", "false")
        LIGHT_BTN.setAttribute("light-mode", "false")
    }
})

//console.log(DARK_BTN.getAttribute('dark-mode'));
//console.log(LIGHT_BTN.getAttribute('light-mode'));
//console.log(NIGHT_BTN.getAttribute('night-mode'));
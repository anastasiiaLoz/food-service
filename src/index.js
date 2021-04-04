import styles from './styles.css';
import data from './dataBases/menu.js';
import template from './templates.js/templates.hbs';

const markup = (template(data));

const menuRef = document.querySelector('.js-menu')
menuRef.insertAdjacentHTML('beforeend', markup);

//=============================================================

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitcher  = document.querySelector('.theme-switch__toggle');
let currentTheme = localStorage.getItem('color');


themeSwitcher.checked = false;

function clickHandler(){
    if(themeSwitcher.checked){
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
        localStorage.setItem('color', Theme.DARK)
    }
    else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('color', Theme.LIGHT);
    }
}
themeSwitcher.addEventListener('change', clickHandler);

if (currentTheme !==null && currentTheme === Theme.DARK){
    document.body.className = currentTheme;
    themeSwitcher.checked = true;
}




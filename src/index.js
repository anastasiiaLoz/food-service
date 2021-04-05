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


//------------------ Вариант 1 -----------------
const themeSwitcher  = document.querySelector('.theme-switch__toggle');
let currentTheme = JSON.parse(localStorage.getItem('color'));
console.log(currentTheme);


themeSwitcher.addEventListener("change", () =>{

document.body.classList.toggle(Theme.DARK);

    if(!currentTheme){
        currentTheme = true;
        localStorage.setItem('color', true);
        
        } else {
        currentTheme = false;
        localStorage.setItem('color', false);
}
})

if (currentTheme === null) {
    localStorage.setItem('color', false);
}

if(currentTheme){
    document.body.classList.add(Theme.DARK);
    themeSwitcher.checked = true;
}
else{
    document.body.classList.add(Theme.LIGHT)
}


//------------------ Вариант 2 -----------------

//const themeSwitcher  = document.querySelector('.theme-switch__toggle');
//let currentTheme = localStorage.getItem('color');
// themeSwitcher.checked = false;

// function clickHandler(){
//     if(themeSwitcher.checked){
//         document.body.classList.remove(Theme.LIGHT);
//         document.body.classList.add(Theme.DARK);
//         localStorage.setItem('color', Theme.DARK)
//     }
//     else {
//         document.body.classList.add(Theme.LIGHT);
//         document.body.classList.remove(Theme.DARK);
//         localStorage.setItem('color', Theme.LIGHT);
//     }
// }
// themeSwitcher.addEventListener('change', clickHandler);

// if (currentTheme !==null && currentTheme === Theme.DARK){
//     document.body.className = currentTheme;
//     themeSwitcher.checked = true;
// }

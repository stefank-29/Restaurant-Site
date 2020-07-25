//TODO meni 
//TODO scrollbar
//TODO menu efekat za underline i za menu u meniju
//TODO menu efekat za aktivni tab
//TODO about
//TODO Contact (google maps)
//TODO Home page dodati jos nesto
//TODO ikonice za fejs, insta gore desno
//TODO Favicon

import {renderHomePage} from './home-page'
import {renderMenuPage} from './menu-page';

window.onload = renderHomePage.render();

function a (){
    
}
const home = document.querySelector("#home-li");
home.addEventListener('click', renderHomePage.render);

const menu = document.querySelector('#menu-li');
menu.addEventListener('click', renderMenuPage.render);

//TODO about (slike koje se preklapaju sa tekstom) + flag
//TODO Contact (google maps)
//TODO google maps dark
//TODO email sender
//TODO Home page dodati jos nesto (lokacija, radno vreme, ime restorana)
//TODO ikonice za fejs, insta gore desno

//git subtree push --prefix dist origin gh-pages


import {renderHomePage} from './home-page';
import {renderMenuPage} from './menu-page';

window.onload = renderHomePage.render();


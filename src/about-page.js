import {renderMenuPage} from './menu-page';
import { renderHomePage } from "./home-page";

const renderAboutPage = (() => {
    const container = document.querySelector('#page-container');
    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }

    const render = () => {
        _deletePage();

        // nav menu
        const navMenu = document.createElement('nav');
        navMenu.setAttribute('id', 'main-nav');
        const ul = document.createElement('ul');
        const imgLogo = document.createElement('img');
        imgLogo.setAttribute('src', './images/burger-logo2.jpg');
        imgLogo.setAttribute('id', 'logo');
        const li1 = document.createElement('li');
        li1.setAttribute('id', 'logo-li');
        li1.appendChild(imgLogo);
        const li2 = document.createElement('li');
        li2.textContent = 'Home';
        li2.setAttribute('id', 'home-li');
        li2.addEventListener('click', renderHomePage.render);
        const li3 = document.createElement('li');
        li3.textContent = 'Menu';
        li3.setAttribute('id', 'menu-li');
        li3.addEventListener('click', function (){renderMenuPage.render('burgers')});
        const li4 = document.createElement('li');
        li4.textContent = 'About';
        li4.setAttribute('id', 'about-li');
        //li4.addEventListener('click', renderAboutPage.render)
        const li5 = document.createElement('li');
        li5.textContent = 'Contact';
        li5.setAttribute('id', 'contact-li');

         ul.appendChild(li1);
         ul.appendChild(li2);
         ul.appendChild(li3);
         ul.appendChild(li4);
         ul.appendChild(li5);
         navMenu.appendChild(ul);
        
         const content = document.createElement('div');
         content.setAttribute('id', 'about-content'); 
         if(flag){ // ako sam presao na about page
             content.style.animation = `insertItem 0.5s linear  1  forwards`
         }   
         // about images
         const aboutImages = document.createElement('div');
         aboutImages.setAttribute('id', 'about-img');
         const img1 = document.createElement('img');
         img1.setAttribute('src', './images/about-page/top3.png');
         img1.setAttribute('id', 'kitchen');
         img1.setAttribute('alt', 'burger making in kitchen')
         const img2 = document.createElement('img');
         img2.setAttribute('src', './images/about-page/burger8.jpg');
         img2.setAttribute('id', 'meal');
         img2.setAttribute('alt', 'burger image')
         aboutImages.appendChild(img1);
         aboutImages.appendChild(img2);
         
         // about text
         const aboutText = document.createElement('div');
         aboutText.setAttribute('id', 'about-text');
         const aboutHeader = document.createElement('div');
         aboutHeader.setAttribute('id', 'header');
         const h2 = document.createElement('h2');
         h2.textContent = 'ABOUT US';
         const imgDiv = document.createElement('div');
         imgDiv.setAttribute('id', 'logo');
         
    }


    function exitFullScreen() {
        this.parentNode.removeChild(this);
    }


    function showFullscreenImg() {
        let img = this.querySelector('img');
       //console.log(img.style.transform);
        const fullScreenImg = document.createElement('img');
        fullScreenImg.setAttribute('src', img.getAttribute('src')); 
        fullScreenImg.style.transform = `${img.style.transform} scale(0.5)`;
        
        const div = document.createElement('div');
        div.classList.add('show');
        div.appendChild(fullScreenImg);
        div.addEventListener('click', exitFullScreen);
        container.appendChild(div);
    }

    return {
        render,
    }

})()


export {renderAboutPage}
import {renderMenuPage} from './menu-page';
import { renderAboutPage } from "./about-page";
import {renderContactPage} from './contact-page';

const renderHomePage = (() => {
    // container
    const container = document.querySelector('#page-container');
    let slogan = document.createElement('h1');
    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }
    
    function render(onload){
        // let elem;
        // if(e !== undefined){ // ako je pocetni render
        //    elem = event.target;
        // }
        _deletePage();
        
       
        
        // nav menu
        const navMenu = document.createElement('nav');
        navMenu.setAttribute('id', 'main-nav');
        const ul = document.createElement('ul');
        const imgLogo = document.createElement('img');
        imgLogo.setAttribute('src', './images/burger-logo-bg.jpg');

        imgLogo.setAttribute('id', 'logo');
        const li1 = document.createElement('li');
        li1.setAttribute('id', 'logo-li');
        li1.appendChild(imgLogo);
        const li2 = document.createElement('li');
        li2.textContent = 'Home';
        li2.setAttribute('id', 'home-li');
        //li2.addEventListener('click', renderHomePage.render);
        const li3 = document.createElement('li');
        li3.textContent = 'Menu';
        li3.setAttribute('id', 'menu-li');
        li3.addEventListener('click', function (){renderMenuPage.render('burgers', true)});
        const li4 = document.createElement('li');
        li4.textContent = 'About';
        li4.setAttribute('id', 'about-li');
        li4.addEventListener('click', renderAboutPage.render)
        const li5 = document.createElement('li');
        li5.textContent = 'Contact';
        li5.setAttribute('id', 'contact-li');
        li5.addEventListener('click', renderContactPage.render);
        
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        

        const social = document.createElement('div');
        social.setAttribute('id', 'social');
        const a1 = document.createElement('a');
        a1.setAttribute('href', 'https://www.instagram.com/explore/tags/food/?hl=en');
        a1.setAttribute('target', '_blank');
        const insta = document.createElement('img');
        insta.setAttribute('src', './images/instagraM.svg');
        insta.setAttribute('alt', 'instagram logo');
        a1.appendChild(insta);
        const a2 = document.createElement('a');
        a2.setAttribute('href', 'https://www.facebook.com/');
        a2.setAttribute('target', '_blank');
        const face = document.createElement('img');
        face.setAttribute('src', './images/facebook.svg');
        face.setAttribute('alt', 'facebook logo');
        a2.appendChild(face);
        const a3 = document.createElement('a');
        a3.setAttribute('href', 'tel:555.236.515');
        const btnNumber = document.createElement('button');
        btnNumber.setAttribute('id', 'numberMenu');
        btnNumber.textContent = '555.236.515';
        a3.appendChild(btnNumber);
        social.appendChild(a1);
        social.appendChild(a2);
        social.appendChild(a3);


        navMenu.appendChild(ul);
        navMenu.appendChild(social);
           
        if(onload === true){ // mora ovako jer radi i sa eventom
            navMenu.style.animation = `navAnimation 0.7s linear 1 forwards` ;  
        }
        

        // content
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
       // slogan = document.createElement('h1');
        slogan.setAttribute('id', 'slogan');
        slogan.textContent = 'A TASTY BURGER IS WHAT YOU DESERVE';
        content.appendChild(slogan);

        // footer
        const footer = document.createElement('footer');
        const footerDiv = document.createElement('div');
        footerDiv.innerHTML = `Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Stefan Karaferovic
        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>`;
        footer.appendChild(footerDiv);

        // append
        container.appendChild(navMenu);
        container.appendChild(content);
        container.appendChild(footer);
        
        li2.classList.add('active');
    }


    const body = document.querySelector('body');
    const walk = 30;
    let xWalk;
    let yWalk;
    function shadow(e) {   
        // offseti
        let width = body.offsetWidth;
        let height = body.offsetHeight;
        let x = e.offsetX;
        let y = e.offsetY;
        if(this !== e.target){
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }
        // walk je raspon
        const xWalk = (x / width * walk) - (walk / 2);
        const yWalk = (y / height * walk) - (walk / 2);
        
        slogan.style.boxShadow = `${xWalk}px ${yWalk}px 2px 5px rgba(0, 0, 0, 0.2)`;
    }
    
    body.addEventListener('mousemove', shadow);

    return {
        render,
    }
})();

export {renderHomePage};
import {renderMenuPage} from './menu-page';
import { renderHomePage } from "./home-page";
import {renderContactPage} from './contact-page';


const renderAboutPage = (() => {
    const container = document.querySelector('#page-container');

    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }

    const render = (flag) => {
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
        li1.addEventListener('click', renderHomePage.render);
        const li2 = document.createElement('li');
        li2.textContent = 'Home';
        li2.setAttribute('id', 'home-li');
        li2.addEventListener('click', renderHomePage.render);
        const li3 = document.createElement('li');
        li3.textContent = 'Menu';
        li3.setAttribute('id', 'menu-li');
        li3.addEventListener('click', function (){renderMenuPage.render('burgers', true)});
        const li4 = document.createElement('li');
        li4.textContent = 'About';
        li4.setAttribute('id', 'about-li');
        //li4.addEventListener('click', renderAboutPage.render)
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
       


         // *******************************
        
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
         const imgLogo2 = document.createElement('img');
         imgLogo2.setAttribute('src', './images/burger-logo-bg.jpg');
         imgLogo2.setAttribute('alt', 'restauran logo');
         imgLogo2.addEventListener('mouseover', changeLogoImg);
         imgLogo2.addEventListener('mouseleave', changeLogoImg2);

         imgDiv.appendChild(imgLogo2);

         aboutHeader.appendChild(h2);
         aboutHeader.appendChild(imgDiv);

         const p1 = document.createElement('p');
         p1.innerHTML = `When we opened <strong class="name">Burger cafe</strong> in June 2017, our vision was to create an unassuming watering hole for the locals. In a town with endless options for bars and lounges, we found it challenging to find a friendly bar with a solid craft beer list, good food, and non-gaming/non-smoking. We wanted to provide friends and neighbors alike with the original form of social networking; a fun easy going bar, and a cold pint. Our staunch belief in providing exceptional quality products with friendly service in a clean and welcoming setting has helped us earn the reputation among the locals as one of the best hidden gems in Las Vegas.`
         const p2 = document.createElement('p');
         p2.innerHTML = `<strong class="name">Burger cafe</strong> is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier breweries in Nevada, this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing beer.`;

         aboutText.appendChild(aboutHeader);
         aboutText.appendChild(p1);
         aboutText.appendChild(p2);

         content.appendChild(aboutText);
         content.appendChild(aboutImages);


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

         li4.classList.add('active');

         const kitchen = document.querySelector('#kitchen');
         const meal = document.querySelector('#meal');
         kitchen.addEventListener('click', showFullscreenImg);
         meal.addEventListener('click', showFullscreenImg);
    }

    function changeLogoImg() {
       this.setAttribute('src', './images/about-page/burger-hover-img.png');
       this.style.transform = `scale(1.2)`
    }

    function changeLogoImg2() {
        this.setAttribute('src', './images/burger-logo-bg.jpg');
        this.style.transform = `scale(1)`
     }
   

    function exitFullScreen() {
        this.parentNode.removeChild(this);
    }


    function showFullscreenImg() {
        let img = this;
       //console.log(img.style.transform);
        const fullScreenImg = document.createElement('img');
        fullScreenImg.setAttribute('src', img.getAttribute('src')); 
        if(img.getAttribute('id') === 'meal'){
            fullScreenImg.style.width = '42rem';
            fullScreenImg.style.height = '55rem';
        }
        fullScreenImg.style.transform = `scale(0.5)`;
        
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
import {renderMenuPage} from './menu-page';
import { renderHomePage } from "./home-page";
import {renderAboutPage} from './about-page';

const renderContactPage = (() => {
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
        li4.addEventListener('click', renderAboutPage.render)
        const li5 = document.createElement('li');
        li5.textContent = 'Contact';
        li5.setAttribute('id', 'contact-li');
        

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
       
         const content = document.createElement('div');
         content.setAttribute('id', 'contact-content');

         const contactInfo = document.createElement('div');
         contactInfo.setAttribute('id', 'contact-info');
         const contactH2 = document.createElement('h2');
         contactH2.textContent = 'CONTACT';
         //item 1
         const item1 = document.createElement('div');
         item1.classList.add('contact-item');
         const span1 = document.createElement('span');
         span1.classList.add('icon');
         const img1 = document.createElement('img');
         img1.setAttribute('src', './images/contact-page/pin.svg');
         img1.setAttribute('alt', 'pin icon');
         span1.appendChild(img1);
         const p1 = document.createElement('p');
         p1.innerHTML = `1510 South Main Street<br>
         Las Vegas, NV 89104 <br>
         Located in Able Baker Brewing`;
         item1.appendChild(span1);
         item1.appendChild(p1);
         //item 2
         const item2 = document.createElement('div');
         item2.classList.add('contact-item');
         const span2 = document.createElement('span');
         span2.classList.add('icon');
         const img2 = document.createElement('img');
         img2.setAttribute('src', './images/contact-page/clock2.svg');
         img2.setAttribute('alt', 'clock icon');
         span2.appendChild(img2);
         const p2 = document.createElement('p');
         p2.innerHTML = `<strong class="name">Sun-Thurs:</strong> 12pm-9pm <br>
         <strong class="name">Fri-Sat:</strong> 12pm-11pm <br>`;
         item2.appendChild(span2);
         item2.appendChild(p2);
         //item 3
         const item3 = document.createElement('div');
         item3.classList.add('contact-item');
         const a = document.createElement('a');
         a.setAttribute('href', 'tel:555.236.515');
         const span3 = document.createElement('span');
         span3.classList.add('icon');
         const img3 = document.createElement('img');
         img3.setAttribute('src', './images/contact-page/phone.svg');
         img3.setAttribute('alt', 'phone icon');
         span3.appendChild(img3);
         const p3 = document.createElement('p');
         p3.setAttribute('id', 'numberFont');
         p3.textContent = `555.236.515`;
         a.appendChild(p3);
         item3.appendChild(span3);
         item3.appendChild(a);
         //item 4
         const item4 = document.createElement('div');
         item4.classList.add('contact-item');
         const span4 = document.createElement('span');
         span4.classList.add('icon');
         const img4 = document.createElement('img');
         img4.setAttribute('src', './images/contact-page/mail.svg');
         img4.setAttribute('alt', 'message icon');
         span4.appendChild(img4);
         const h3 = document.createElement('h3');
         h3.textContent = 'MESSAGE US';
         item4.appendChild(span4);
         item4.appendChild(h3);
         //item5
         const item5 = document.createElement('div');
         item5.setAttribute('id', 'email-sender');
         const form = document.createElement('form');
         form.setAttribute('action', 'mailto:stefankaraferovic@gmail.com');
         form.setAttribute('autocomplete', 'off');
         form.setAttribute('method', 'post');
         form.setAttribute('enctype', 'text/plain');
         const input1 = document.createElement('input');
         input1.setAttribute('type', 'text');
         input1.setAttribute('id', 'name');
         input1.setAttribute('size', '25');
         input1.setAttribute('placeholder', 'Name');
         const input2 = document.createElement('input');
         input2.setAttribute('type', 'text');
         input2.setAttribute('id', 'name');
         input2.setAttribute('size', '25');
         input2.setAttribute('placeholder', 'Phone Number');
         const input3 = document.createElement('input');
         input3.setAttribute('type', 'text');
         input3.setAttribute('id', 'name');
         input3.setAttribute('size', '25');
         input3.setAttribute('placeholder', 'Email Address');
         
         const textarea = document.createElement('textarea');
         textarea.setAttribute('name', 'message');
         textarea.setAttribute('id', 'message');
         textarea.setAttribute('cols', '25');
         textarea.setAttribute('rows', '4');
         textarea.setAttribute('placeholder', 'Message');
         textarea.setAttribute('resize', 'none');
         

         const input4 = document.createElement('input');
         input4.setAttribute('type', 'submit');
         input4.setAttribute('value', 'Send message');
         input4.setAttribute('id', 'send');

         form.appendChild(input1);
         form.appendChild(input2);
         form.appendChild(input3);
         form.appendChild(textarea);
         form.appendChild(input4);
         
         item5.appendChild(form);

         contactInfo.appendChild(contactH2);
         contactInfo.appendChild(item1);
         contactInfo.appendChild(item2);
         contactInfo.appendChild(item3);
         contactInfo.appendChild(item4);
         contactInfo.appendChild(item5);

       
        const contactMaps = document.createElement('div');
        contactMaps.setAttribute('id', 'contact-maps');
        const map = document.createElement('div');
        map.setAttribute('id', 'map');
        map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610.780206373452!2d-115.15545604177532!3d36.15291516076011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c36183d55c75%3A0x360e9f50b5991491!2sArts%20District%20Kitchen!5e0!3m2!1sen!2srs!4v1596023186728!5m2!1sen!2srs" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
        contactMaps.appendChild(map);
        

        content.appendChild(contactInfo);
        content.appendChild(contactMaps);

         // footer
        const footer = document.createElement('footer');
        const footerDiv = document.createElement('div');
        footerDiv.innerHTML = `Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Stefan Karaferovic
        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>`;
        footer.appendChild(footerDiv);

        //append
        container.appendChild(navMenu);
        container.appendChild(content);
        container.appendChild(footer);

        li5.classList.add('active');

    }


    return {
        render,
    }

})();


export {renderContactPage};
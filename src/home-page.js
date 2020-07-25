import {renderMenuPage} from './menu-page';

const renderHomePage = (() => {
    // container
    const container = document.querySelector('#page-container');
    let slogan;
    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }
    
    function render(e){
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
        imgLogo.setAttribute('src', '/images/burger-logo2.jpg');
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
        const li5 = document.createElement('li');
        li5.textContent = 'Contact';
        li5.setAttribute('id', 'contact-li');
        
        
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        navMenu.appendChild(ul);
        
        

        // content
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        slogan = document.createElement('h1');
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
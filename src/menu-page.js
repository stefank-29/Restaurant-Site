import { renderHomePage } from "./home-page";

const renderMenuPage = (() => {
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
        imgLogo.setAttribute('src', '/images/burger-logo2.jpg');
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
        li3.addEventListener('click', renderMenuPage.render);
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
    
        //content
        const content = document.createElement('div');
        content.setAttribute('id', 'menu-content');    

        //menu
        const menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        const ulMenu = document.createElement('ul');
        const menuItem1 = document.createElement('li');
        menuItem1.setAttribute('id', 'burgers');
        menuItem1.textContent = 'BURGERS & SANDWICHES';
        const menuItem2 = document.createElement('li');
        menuItem2.setAttribute('id', 'snacks');
        menuItem2.textContent = 'SNACKS';
        const menuItem3 = document.createElement('li');
        menuItem3.textContent = 'SALADS';
        menuItem3.setAttribute('id', 'salads');
        const menuItem4 = document.createElement('li');
        menuItem4.textContent = 'DESSERTS';
        menuItem4.setAttribute('id', 'desserts');

        ulMenu.appendChild(menuItem1);
        ulMenu.appendChild(menuItem2);
        ulMenu.appendChild(menuItem3);
        ulMenu.appendChild(menuItem4);

        menu.appendChild(ulMenu);

        //menu items
        const menuItems = document.createElement('div');
        menuItems.setAttribute('id', 'menu-items');

        const item1 = document.createElement('div');
        item1.classList.add('menu-item');
        const itemHeader1 = document.createElement('div');
        itemHeader1.classList.add('menu-item-header');

        const name1 = document.createElement('h2');
        name1.classList.add('name');
        name1.textContent = 'CRAFT BURGER';
        const price1 = document.createElement('span');
        price1.classList.add('price');
        price1.textContent = '9$';

        itemHeader1.appendChild(name1);
        itemHeader1.appendChild(price1);

        const itemDescription1 = document.createElement('div');
        itemDescription1.classList.add('menu-item-description');
        const p1 = document.createElement('p');
        p1.textContent = 'Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce';
        itemDescription1.appendChild(p1);

        item1.appendChild(itemHeader1);
        item1.appendChild(itemDescription1);


    // -----------------------------------

        menuItems.appendChild(item1);

    // -----------------------------------
        content.appendChild(menu);
        content.appendChild(menuItems);



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
    }

    return{
        render,
    }

})();

export {renderMenuPage};



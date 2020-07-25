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
        // item 1
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
        // item 2
        const item2 = document.createElement('div');
        item2.classList.add('menu-item');
        const itemHeader2 = document.createElement('div');
        itemHeader2.classList.add('menu-item-header');

        const name2 = document.createElement('h2');
        name2.classList.add('name');
        name2.textContent = 'FRIED CHICKEN SANDWICH';
        const price2 = document.createElement('span');
        price2.classList.add('price');
        price2.textContent = '10$';

        itemHeader2.appendChild(name2);
        itemHeader2.appendChild(price2);

        const itemDescription2 = document.createElement('div');
        itemDescription2.classList.add('menu-item-description');
        const p2 = document.createElement('p');
        p2.innerHTML = 'Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo';
        itemDescription2.appendChild(p2);

        item2.appendChild(itemHeader2);
        item2.appendChild(itemDescription2);
        //item 3
        const item3 = document.createElement('div');
        item3.classList.add('menu-item');
        const itemHeader3 = document.createElement('div');
        itemHeader3.classList.add('menu-item-header');

        const name3 = document.createElement('h2');
        name3.classList.add('name');
        name3.textContent = 'PORK BELLY BURGER';
        const price3 = document.createElement('span');
        price3.classList.add('price');
        price3.textContent = '11$';

        itemHeader3.appendChild(name3);
        itemHeader3.appendChild(price3);

        const itemDescription3 = document.createElement('div');
        itemDescription3.classList.add('menu-item-description');
        const p3 = document.createElement('p');
        p3.textContent = 'Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro';
        itemDescription3.appendChild(p3);

        item3.appendChild(itemHeader3);
        item3.appendChild(itemDescription3);
        //item 4
        
        const item4 = document.createElement('div');
        item4.classList.add('menu-item');
        const itemHeader4 = document.createElement('div');
        itemHeader4.classList.add('menu-item-header');

        const name4 = document.createElement('h2');
        name4.classList.add('name');
        name4.textContent = 'VEGAN CRAFT BURGER';
        const price4 = document.createElement('span');
        price4.classList.add('price');
        price4.textContent = '11$';

        itemHeader4.appendChild(name4);
        itemHeader4.appendChild(price4);

        const itemDescription4 = document.createElement('div');
        itemDescription4.classList.add('menu-item-description');
        const p4 = document.createElement('p');
        p4.textContent = 'Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce';
        itemDescription4.appendChild(p4);

        item4.appendChild(itemHeader4);
        item4.appendChild(itemDescription4);
        //item5 BEER BATTERED FISH PO'BOY
        const item5 = document.createElement('div');
        item5.classList.add('menu-item');
        const itemHeader5 = document.createElement('div');
        itemHeader5.classList.add('menu-item-header');

        const name5 = document.createElement('h2');
        name5.classList.add('name');
        name5.textContent = `BEER BATTERED FISH PO'BOY`;
        const price5 = document.createElement('span');
        price5.classList.add('price');
        price5.textContent = '10$';

        itemHeader5.appendChild(name5);
        itemHeader5.appendChild(price5);

        const itemDescription5 = document.createElement('div');
        itemDescription5.classList.add('menu-item-description');
        const p5 = document.createElement('p');
        p5.textContent = 'Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles';
        itemDescription5.appendChild(p5);

        item5.appendChild(itemHeader5);
        item5.appendChild(itemDescription5);
        //item 6 BBQ CHICKEN BANH MI
        const item6 = document.createElement('div');
        item6.classList.add('menu-item');
        const itemHeader6 = document.createElement('div');
        itemHeader6.classList.add('menu-item-header');

        const name6 = document.createElement('h2');
        name6.classList.add('name');
        name6.textContent = `BBQ CHICKEN BANH MI`;
        const price6 = document.createElement('span');
        price6.classList.add('price');
        price6.textContent = '9$';

        itemHeader6.appendChild(name6);
        itemHeader6.appendChild(price6);

        const itemDescription6 = document.createElement('div');
        itemDescription6.classList.add('menu-item-description');
        const p6 = document.createElement('p');
        p6.textContent = 'Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
        itemDescription6.appendChild(p6);

        item6.appendChild(itemHeader6);
        item6.appendChild(itemDescription6);
        //item7 BBQ STEAK BANH MI
        const item7 = document.createElement('div');
        item7.classList.add('menu-item');
        const itemHeader7 = document.createElement('div');
        itemHeader7.classList.add('menu-item-header');

        const name7 = document.createElement('h2');
        name7.classList.add('name');
        name7.textContent = `BBQ STEAK BANH MI`;
        const price7 = document.createElement('span');
        price7.classList.add('price');
        price7.textContent = '10$';

        itemHeader7.appendChild(name7);
        itemHeader7.appendChild(price7);

        const itemDescription7 = document.createElement('div');
        itemDescription7.classList.add('menu-item-description');
        const p7 = document.createElement('p');
        p7.textContent = 'Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
        itemDescription7.appendChild(p7);

        item7.appendChild(itemHeader7);
        item7.appendChild(itemDescription7);

        //item 8 PORK BELLY BANH MI
        const item8 = document.createElement('div');
        item8.classList.add('menu-item');
        const itemHeader8 = document.createElement('div');
        itemHeader8.classList.add('menu-item-header');

        const name8 = document.createElement('h2');
        name8.classList.add('name');
        name8.textContent = `PORK BELLY BANH MI`;
        const price8 = document.createElement('span');
        price8.classList.add('price');
        price8.textContent = '11$';

        itemHeader8.appendChild(name8);
        itemHeader8.appendChild(price8);

        const itemDescription8 = document.createElement('div');
        itemDescription8.classList.add('menu-item-description');
        const p8 = document.createElement('p');
        p8.textContent = 'Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
        itemDescription8.appendChild(p8);

        item8.appendChild(itemHeader8);
        item8.appendChild(itemDescription8);
    // -----------------------------------

        menuItems.appendChild(item1);
        menuItems.appendChild(item2);
        menuItems.appendChild(item3);
        menuItems.appendChild(item4);
        menuItems.appendChild(item5);
        menuItems.appendChild(item6);
        menuItems.appendChild(item7);
        menuItems.appendChild(item8);



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



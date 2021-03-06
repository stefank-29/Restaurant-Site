import { renderHomePage } from "./home-page";
import { renderAboutPage } from "./about-page";
import {renderContactPage} from './contact-page';

const renderMenuPage = (() => {
    const container = document.querySelector('#page-container');
    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }

    const render = (type, flag) => {
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
      //  li3.addEventListener('click', function (){renderMenuPage.render('burgers')});
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
       

        //content
        const content = document.createElement('div');
        content.setAttribute('id', 'menu-content'); 
        if(flag){ // ako sam presao na menu page
            content.style.animation = `insertItem 0.6s linear  1  forwards`
        }   
        
        //menu
        const menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        const ulMenu = document.createElement('ul');
        const menuItem1 = document.createElement('li');
        menuItem1.setAttribute('id', 'burgers');
        menuItem1.textContent = 'BURGERS & SANDWICHES';
        menuItem1.addEventListener('click', function(){render('burgers')});
        const menuItem2 = document.createElement('li');
        menuItem2.setAttribute('id', 'snacks');
        menuItem2.textContent = 'SNACKS';
        menuItem2.addEventListener('click', function(){render('snacks')});
        const menuItem3 = document.createElement('li');
        menuItem3.textContent = 'SALADS';
        menuItem3.setAttribute('id', 'salads');
        menuItem3.addEventListener('click', function(){render('salads')})
        const menuItem4 = document.createElement('li');
        menuItem4.textContent = 'MINI ME';
        menuItem4.setAttribute('id', 'minies');
        menuItem4.addEventListener('click', function(){render('minies')})

        ulMenu.appendChild(menuItem1);
        ulMenu.appendChild(menuItem2);
        ulMenu.appendChild(menuItem3);
        ulMenu.appendChild(menuItem4);

        menu.appendChild(ulMenu);
        if(type === 'burgers'){
            //
            menuItem1.classList.add('activeTab');

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
            //img
            const imgDiv1 = document.createElement('div');
            imgDiv1.classList.add('img-div');
            const img1 = document.createElement('img');
            img1.setAttribute('src', './images/burgers/burger1.jpg');
            imgDiv1.appendChild(img1);

            const itemDescription1 = document.createElement('div');
            itemDescription1.classList.add('menu-item-description');
            const p1 = document.createElement('p');
            p1.textContent = 'Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce';
            itemDescription1.appendChild(p1);
            itemDescription1.appendChild(imgDiv1);

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
            //img
            const img2 = document.createElement('img');
            img2.setAttribute('src', './images/burgers/burger2.jpg');

            const itemDescription2 = document.createElement('div');
            itemDescription2.classList.add('menu-item-description');
            const p2 = document.createElement('p');
            p2.innerHTML = 'Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo';
            itemDescription2.appendChild(p2);
            itemDescription2.appendChild(img2);

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
            //img
            const img3 = document.createElement('img');
            img3.setAttribute('src', './images/burgers/burger3.jpg');

            const itemDescription3 = document.createElement('div');
            itemDescription3.classList.add('menu-item-description');
            const p3 = document.createElement('p');
            p3.textContent = 'Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro';
            itemDescription3.appendChild(p3);
            itemDescription3.appendChild(img3);
            

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
            //img
            const img4 = document.createElement('img');
            img4.setAttribute('src', './images/burgers/burger4.jpg');


            const itemDescription4 = document.createElement('div');
            itemDescription4.classList.add('menu-item-description');
            const p4 = document.createElement('p');
            p4.textContent = 'Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce';
            itemDescription4.appendChild(p4);
            itemDescription4.appendChild(img4);

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
            //img
            const img5 = document.createElement('img');
            img5.setAttribute('src', './images/burgers/burger5.jpg');


            const itemDescription5 = document.createElement('div');
            itemDescription5.classList.add('menu-item-description');
            const p5 = document.createElement('p');
            p5.textContent = 'Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles';
            itemDescription5.appendChild(p5);
            itemDescription5.appendChild(img5);

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
            //img
            const img6 = document.createElement('img');
            img6.setAttribute('src', './images/burgers/burger6.jpg');


            const itemDescription6 = document.createElement('div');
            itemDescription6.classList.add('menu-item-description');
            const p6 = document.createElement('p');
            p6.textContent = 'Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
            itemDescription6.appendChild(p6);
            itemDescription6.appendChild(img6);

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
            //img
            const img7 = document.createElement('img');
            img7.setAttribute('src', './images/burgers/burger7.jpg');


            const itemDescription7 = document.createElement('div');
            itemDescription7.classList.add('menu-item-description');
            const p7 = document.createElement('p');
            p7.textContent = 'Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
            itemDescription7.appendChild(p7);
            itemDescription7.appendChild(img7);

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
            //img
            const img8 = document.createElement('img');
            img8.setAttribute('src', './images/burgers/burger8.jpg');


            const itemDescription8 = document.createElement('div');
            itemDescription8.classList.add('menu-item-description');
            const p8 = document.createElement('p');
            p8.textContent = 'Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo';
            itemDescription8.appendChild(p8);
            itemDescription8.appendChild(img8);

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
        }

        if(type === 'snacks'){
                  menuItem2.classList.add('activeTab');      

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
                  name1.textContent = 'FRENCH FRIES';
                  const price1 = document.createElement('span');
                  price1.classList.add('price');
                  price1.textContent = '5$';
      
                  itemHeader1.appendChild(name1);
                  itemHeader1.appendChild(price1);
                  const img1 = document.createElement('img');
                  img1.setAttribute('src', './images/snacks/snack1.jpg');
      
                  const itemDescription1 = document.createElement('div');
                  itemDescription1.classList.add('menu-item-description');
                  const p1 = document.createElement('p');
                  p1.textContent = 'Served with Fry Sauce';
                  itemDescription1.appendChild(p1);
                  itemDescription1.appendChild(img1);-
      
                  item1.appendChild(itemHeader1);
                  item1.appendChild(itemDescription1);
                  // item 2
                  const item2 = document.createElement('div');
                  item2.classList.add('menu-item');
                  const itemHeader2 = document.createElement('div');
                  itemHeader2.classList.add('menu-item-header');
      
                  const name2 = document.createElement('h2');
                  name2.classList.add('name');
                  name2.textContent = 'BEER BRINED JUMBO WINGS (6 OR 12)';
                  const price2 = document.createElement('span');
                  price2.classList.add('price');
                  price2.textContent = '12/19$';
      
                  itemHeader2.appendChild(name2);
                  itemHeader2.appendChild(price2);
                  const img2 = document.createElement('img');
                  img2.setAttribute('src', './images/snacks/snack2.jpg');
      
                  const itemDescription2 = document.createElement('div');
                  itemDescription2.classList.add('menu-item-description');
                  const p2 = document.createElement('p');
                  p2.innerHTML = 'Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese';
                  itemDescription2.appendChild(p2);
                  itemDescription2.appendChild(img2);
      
                  item2.appendChild(itemHeader2);
                  item2.appendChild(itemDescription2);
                  //item 3
                  const item3 = document.createElement('div');
                  item3.classList.add('menu-item');
                  const itemHeader3 = document.createElement('div');
                  itemHeader3.classList.add('menu-item-header');
      
                  const name3 = document.createElement('h2');
                  name3.classList.add('name');
                  name3.textContent = 'CRISPY CAULIFLOWER';
                  const price3 = document.createElement('span');
                  price3.classList.add('price');
                  price3.textContent = '9$';
      
                  itemHeader3.appendChild(name3);
                  itemHeader3.appendChild(price3);
                  const img3 = document.createElement('img');
                  img3.setAttribute('src', './images/snacks/snack3.jpg');

                  const itemDescription3 = document.createElement('div');
                  itemDescription3.classList.add('menu-item-description');
                  const p3 = document.createElement('p');
                  p3.textContent = 'Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese.';
                  itemDescription3.appendChild(p3);
                  itemDescription3.appendChild(img3);
      
                  item3.appendChild(itemHeader3);
                  item3.appendChild(itemDescription3);
                  //item 4
                  
                  const item4 = document.createElement('div');
                  item4.classList.add('menu-item');
                  const itemHeader4 = document.createElement('div');
                  itemHeader4.classList.add('menu-item-header');
      
                  const name4 = document.createElement('h2');
                  name4.classList.add('name');
                  name4.textContent = 'ELOTE SALSA & CHIPS';
                  const price4 = document.createElement('span');
                  price4.classList.add('price');
                  price4.textContent = '7$';
      
                  itemHeader4.appendChild(name4);
                  itemHeader4.appendChild(price4);
                  const img4 = document.createElement('img');
                  img4.setAttribute('src', './images/snacks/snack4.jpg');
      
                  const itemDescription4 = document.createElement('div');
                  itemDescription4.classList.add('menu-item-description');
                  const p4 = document.createElement('p');
                  p4.textContent = 'Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese';
                  itemDescription4.appendChild(p4);
                  itemDescription4.appendChild(img4);
      
                  item4.appendChild(itemHeader4);
                  item4.appendChild(itemDescription4);
                  //item5 BEER BATTERED FISH PO'BOY
                  const item5 = document.createElement('div');
                  item5.classList.add('menu-item');
                  const itemHeader5 = document.createElement('div');
                  itemHeader5.classList.add('menu-item-header');
      
                  const name5 = document.createElement('h2');
                  name5.classList.add('name');
                  name5.textContent = `BAJA FISH TACOS`;
                  const price5 = document.createElement('span');
                  price5.classList.add('price');
                  price5.textContent = '7$';
      
                  itemHeader5.appendChild(name5);
                  itemHeader5.appendChild(price5);
                  const img5 = document.createElement('img');
                  img5.setAttribute('src', './images/snacks/snack5.jpg');
      
                  const itemDescription5 = document.createElement('div');
                  itemDescription5.classList.add('menu-item-description');
                  const p5 = document.createElement('p');
                  p5.textContent = 'Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema';
                  itemDescription5.appendChild(p5);
                  itemDescription5.appendChild(img5);
      
                  item5.appendChild(itemHeader5);
                  item5.appendChild(itemDescription5);
                  //item 6 BBQ CHICKEN BANH MI
                  const item6 = document.createElement('div');
                  item6.classList.add('menu-item');
                  const itemHeader6 = document.createElement('div');
                  itemHeader6.classList.add('menu-item-header');
      
                  const name6 = document.createElement('h2');
                  name6.classList.add('name');
                  name6.textContent = `TJ DOG`;
                  const price6 = document.createElement('span');
                  price6.classList.add('price');
                  price6.textContent = '5$';
      
                  itemHeader6.appendChild(name6);
                  itemHeader6.appendChild(price6);
                  const img6 = document.createElement('img');
                  img6.setAttribute('src', './images/snacks/snack6.jpg');
      
                  const itemDescription6 = document.createElement('div');
                  itemDescription6.classList.add('menu-item-description');
                  const p6 = document.createElement('p');
                  p6.textContent = 'Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese';
                  itemDescription6.appendChild(p6);
                  itemDescription6.appendChild(img6);
      
                  item6.appendChild(itemHeader6);
                  item6.appendChild(itemDescription6);
                  //item7 BBQ STEAK BANH MI
                  const item7 = document.createElement('div');
                  item7.classList.add('menu-item');
                  const itemHeader7 = document.createElement('div');
                  itemHeader7.classList.add('menu-item-header');
      
                  const name7 = document.createElement('h2');
                  name7.classList.add('name');
                  name7.textContent = `GARBAGE NACHOS`;
                  const price7 = document.createElement('span');
                  price7.classList.add('price');
                  price7.textContent = '12$';
      
                  itemHeader7.appendChild(name7);
                  itemHeader7.appendChild(price7);
                  const img7 = document.createElement('img');
                  img7.setAttribute('src', './images/snacks/snack7.jpg');
      
                  const itemDescription7 = document.createElement('div');
                  itemDescription7.classList.add('menu-item-description');
                  const p7 = document.createElement('p');
                  p7.textContent = 'Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema';
                  itemDescription7.appendChild(p7);
                  itemDescription7.appendChild(img7);
      
                  item7.appendChild(itemHeader7);
                  item7.appendChild(itemDescription7);
      
                  
              // -----------------------------------
      
                  menuItems.appendChild(item1);
                  menuItems.appendChild(item2);
                  menuItems.appendChild(item3);
                  menuItems.appendChild(item4);
                  menuItems.appendChild(item5);
                  menuItems.appendChild(item6);
                  menuItems.appendChild(item7);
                  
      
      
          // -----------------------------------
              content.appendChild(menu);
              content.appendChild(menuItems);
              }
        
        if(type === 'salads'){
            menuItem3.classList.add('activeTab');      

            const menuItems = document.createElement('div');
                  menuItems.setAttribute('id', 'menu-items');
                  // item 1
                  const item1 = document.createElement('div');
                  item1.classList.add('menu-item');
                  const itemHeader1 = document.createElement('div');
                  itemHeader1.classList.add('menu-item-header');
      
                  const name1 = document.createElement('h2');
                  name1.classList.add('name');
                  name1.textContent = 'MIXED GREENS';
                  const price1 = document.createElement('span');
                  price1.classList.add('price');
                  price1.textContent = '9$';
      
                  itemHeader1.appendChild(name1);
                  itemHeader1.appendChild(price1);
                  const img1 = document.createElement('img');
                  img1.setAttribute('src', './images/salads/salad1.jpg');
      
                  const itemDescription1 = document.createElement('div');
                  itemDescription1.classList.add('menu-item-description');
                  const p1 = document.createElement('p');
                  p1.textContent = 'Carrots, Tomatoes, Cucumber, Croutons & Choice of: Citrus Vinaigrette (V), Ranch, or Blue Cheese Dressing';
                  itemDescription1.appendChild(p1);
                  itemDescription1.appendChild(img1);
      
                  item1.appendChild(itemHeader1);
                  item1.appendChild(itemDescription1);
                  // item 2
                  const item2 = document.createElement('div');
                  item2.classList.add('menu-item');
                  const itemHeader2 = document.createElement('div');
                  itemHeader2.classList.add('menu-item-header');
      
                  const name2 = document.createElement('h2');
                  name2.classList.add('name');
                  name2.textContent = 'CRAFT COBB';
                  const price2 = document.createElement('span');
                  price2.classList.add('price');
                  price2.textContent = '10$';
      
                  itemHeader2.appendChild(name2);
                  itemHeader2.appendChild(price2);
                  const img2 = document.createElement('img');
                  img2.setAttribute('src', './images/salads/salad2.jpg');
      
      
                  const itemDescription2 = document.createElement('div');
                  itemDescription2.classList.add('menu-item-description');
                  const p2 = document.createElement('p');
                  p2.innerHTML = 'Romaine, Carrots, Tomatoes, Cucumber, Egg, Bacon, Blue Cheese';
                  itemDescription2.appendChild(p2);
                  itemDescription2.appendChild(img2);
      
                  item2.appendChild(itemHeader2);
                  item2.appendChild(itemDescription2);
                  //item 3
                  const item3 = document.createElement('div');
                  item3.classList.add('menu-item');
                  const itemHeader3 = document.createElement('div');
                  itemHeader3.classList.add('menu-item-header');
      
                  const name3 = document.createElement('h2');
                  name3.classList.add('name');
                  name3.textContent = 'CAESAR';
                  const price3 = document.createElement('span');
                  price3.classList.add('price');
                  price3.textContent = '9$';
      
                  itemHeader3.appendChild(name3);
                  itemHeader3.appendChild(price3);
                  const img3 = document.createElement('img');
                  img3.setAttribute('src', './images/salads/salad3.jpg');
      
      
                  const itemDescription3 = document.createElement('div');
                  itemDescription3.classList.add('menu-item-description');
                  const p3 = document.createElement('p');
                  p3.textContent = 'Romaine, Shaved Parmesan, Croutons';
                  itemDescription3.appendChild(p3);
                  itemDescription3.appendChild(img3);
      
                  item3.appendChild(itemHeader3);
                  item3.appendChild(itemDescription3);
                  //item 4
                  
                  const item4 = document.createElement('div');
                  item4.classList.add('menu-item');
                  const itemHeader4 = document.createElement('div');
                  itemHeader4.classList.add('menu-item-header');
      
                  const name4 = document.createElement('h2');
                  name4.classList.add('name');
                  name4.textContent = 'ADD PROTEIN';
                  
      
                  itemHeader4.appendChild(name4);
      
                  const itemDescription4 = document.createElement('div');
                  itemDescription4.classList.add('menu-item-description');
                  const p4 = document.createElement('p');
                  const p5 = document.createElement('p');
                  const p6 = document.createElement('p');
                  p4.textContent = 'Grilled Chipotle Chicken – 4$';
                  p5.textContent = 'Peppered Sirloin Steak – 5$';
                  p6.textContent = 'Pork Belly – 5$';
                  itemDescription4.appendChild(p4);
                  itemDescription4.appendChild(p5);
                  itemDescription4.appendChild(p6);
                  p4.style.margin = '1rem 0rem 0rem';
                  p5.style.margin = '0rem';
                  p6.style.margin = '0rem';
      
                  item4.appendChild(itemHeader4);
                  item4.appendChild(itemDescription4);

           // -----------------------------------
      
                   menuItems.appendChild(item1);
                   menuItems.appendChild(item2);
                   menuItems.appendChild(item3);
                   menuItems.appendChild(item4);
                   
                   
       
       
           // -----------------------------------
               content.appendChild(menu);
               content.appendChild(menuItems);
        }   
        
        if(type === 'minies'){
            menuItem4.classList.add('activeTab');      

            const menuItems = document.createElement('div');
                  menuItems.setAttribute('id', 'menu-items');
                  // item 1
                  const item1 = document.createElement('div');
                  item1.classList.add('menu-item');
                  const itemHeader1 = document.createElement('div');
                  itemHeader1.classList.add('menu-item-header');
      
                  const name1 = document.createElement('h2');
                  name1.classList.add('name');
                  name1.textContent = 'MINI BURGER W/ FRIES';
                  const price1 = document.createElement('span');
                  price1.classList.add('price');
                  price1.textContent = '9$';
      
                  itemHeader1.appendChild(name1);
                  itemHeader1.appendChild(price1);
                  const img1 = document.createElement('img');
                  img1.setAttribute('src', './images/minies/mini1.jpg');
      
      
                  const itemDescription1 = document.createElement('div');
                  itemDescription1.classList.add('menu-item-description');
                  const p1 = document.createElement('p');
                  p1.textContent = 'Meat, Cheese, Potato Roll';
                  itemDescription1.appendChild(p1);
                  itemDescription1.appendChild(img1);
      
                  item1.appendChild(itemHeader1);
                  item1.appendChild(itemDescription1);
                  // item 2
                  const item2 = document.createElement('div');
                  item2.classList.add('menu-item');
                  const itemHeader2 = document.createElement('div');
                  itemHeader2.classList.add('menu-item-header');
      
                  const name2 = document.createElement('h2');
                  name2.classList.add('name');
                  name2.textContent = 'GRILLED CHEESE W/ FRIES';
                  const price2 = document.createElement('span');
                  price2.classList.add('price');
                  price2.textContent = '8$';
      
                  itemHeader2.appendChild(name2);
                  itemHeader2.appendChild(price2);
                  const img2 = document.createElement('img');
                  img2.setAttribute('src', './images/minies/mini2.jpg');
      
                  const itemDescription2 = document.createElement('div');
                  itemDescription2.classList.add('menu-item-description');
                  const p2 = document.createElement('p');
                  p2.textContent = 'American & Cheddar';
                  itemDescription2.appendChild(p2);
                  itemDescription2.appendChild(img2);
      
                  item2.appendChild(itemHeader2);
                  item2.appendChild(itemDescription2);
                  //item 3
                  const item3 = document.createElement('div');
                  item3.classList.add('menu-item');
                  const itemHeader3 = document.createElement('div');
                  itemHeader3.classList.add('menu-item-header');
      
                  const name3 = document.createElement('h2');
                  name3.classList.add('name');
                  name3.textContent = 'MAC & CHEESE';
                  const price3 = document.createElement('span');
                  price3.classList.add('price');
                  price3.textContent = '6$';
      
                  itemHeader3.appendChild(name3);
                  itemHeader3.appendChild(price3);
                  const img3 = document.createElement('img');
                  img3.setAttribute('src', './images/minies/mini3.jpg');

                  const itemDescription3 = document.createElement('div');
                  itemDescription3.classList.add('menu-item-description');
                  const p3 = document.createElement('p');
                  p3.innerHTML = '';
                  itemDescription3.appendChild(p3);
                  itemDescription3.appendChild(img3);
        
                  item3.appendChild(itemHeader3);
                  item3.appendChild(itemDescription3);
                 
                // -----------------------------------
      
                   menuItems.appendChild(item1);
                   menuItems.appendChild(item2);
                   menuItems.appendChild(item3);
                                                      
         
                // -----------------------------------
                  content.appendChild(menu);
                  content.appendChild(menuItems);
        }


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
        
        li3.classList.add('active');

        // event listeners
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.addEventListener('mousemove', function(){moveImg(item)});
            item.addEventListener('click', showFullscreenImg);
    })

        
    }

    
    
    
    const walk = 1000;
    let xWalk;
    let yWalk;
    function moveImg(item) {   
        // offseti
         let width = item.offsetWidth;
         let height = item.offsetHeight;
         let x = event.offsetX;
         let y = event.offsetY;
         if(this !== event.target){
            x += event.target.offsetLeft;
            y += event.target.offsetTop;
         }
         //console.log(x, y);
         
        // walk je raspon
          xWalk = Math.round((x / width * walk) - (walk / 2));
          yWalk = Math.round((y / height * walk) - (walk / 2));
         // console.log(xWalk, yWalk);
         //console.log('x:' + xWalk, 'y:' +yWalk);
        
        let img = item.querySelector('img');
        img.style.transform = `translateX(${xWalk/75+55}rem) translateY(${yWalk/75-18}rem)`;
    }
    function exitFullScreen() {
        this.parentNode.removeChild(this);
    }


    function showFullscreenImg() {
        let img = this.querySelector('img');
       // console.log(img.style.transform);
        const fullScreenImg = document.createElement('img');
        fullScreenImg.setAttribute('src', img.getAttribute('src')); 
        fullScreenImg.style.transform = `${img.style.transform} scale(0.5)`;
        
        const div = document.createElement('div');
        div.classList.add('show');
        div.appendChild(fullScreenImg);
        div.addEventListener('click', exitFullScreen);
        container.appendChild(div);
    }

    return{
        render,
    }

})();

export {renderMenuPage};



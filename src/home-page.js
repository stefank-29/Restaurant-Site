const renderHomePage = (() => {
    const container = document.querySelector('#page-container');
    const  render = () => {
        //nav menu
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
        li1.textContent = 'Home';
        const li3 = document.createElement('li');
        li1.textContent = 'Menu';
        const li4 = document.createElement('li');
        li1.textContent = 'About';
        const li5 = document.createElement('li');
        li1.textContent = 'Contact';
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);


        //content
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        
    }

    return {
        render
    }
})();

export {renderHomePage};
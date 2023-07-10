import './styles/menuPage.css'
import menuPizza from './images/menuPizza2.jpg'

function LoadMenuPage() {
    const homeButton = document.getElementById("homeButton")
    const menuButton = document.getElementById("menuButton");
    menuButton.classList.add("activePage");
    const contactButton = document.getElementById("contactButton");
    contactButton.classList.remove("activePage");
    homeButton.classList.remove("activePage")


    const content = document.getElementById("content");


    const menuTitle = document.createElement('div');
    menuTitle.textContent = 'Menu';
    menuTitle.setAttribute('id','menuTitle');

    content.appendChild(menuTitle)

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('id','menuContainer');

    for (let i = 0; i <6 ; i++) {
        const itemOne = document.createElement('div');
        itemOne.classList.add('menuItem');
        const itemOneImg = new Image();
        itemOneImg.src = menuPizza
        itemOneImg.classList.add('itemImg');
        itemOne.appendChild(itemOneImg);
        const itemOneText = document.createElement('div');
        itemOneText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id lectus quis odio auctor condimentum at id neque. Ut vitae tincidunt ipsum. Pellentesque ullamcorper consequat orci ac convallis. Maecenas semper facilisis nibh et fermentum. Vivamus ac tortor non magna cursus auctor vel id nibh'
        itemOneText.classList.add('itemText');
        itemOne.appendChild(itemOneText);
        menuContainer.appendChild(itemOne);
    }

    content.appendChild(menuContainer);
}

export default LoadMenuPage;
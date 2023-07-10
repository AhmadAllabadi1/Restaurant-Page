
import './styles/navBar.css'

const loadNavBar = function () {
    const body = document.querySelector("body");
    const navBarContainer = document.createElement("div");
    const title = document.createElement("div");
    const navBar = document.createElement('div');
    navBar.classList.add("navBar");
    const homeButton = document.createElement('button');
    homeButton.classList.add("navBarButton");
    homeButton.setAttribute("id","homeButton");
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add("navBarButton");
    menuButton.setAttribute("id","menuButton");
    const contactButton = document.createElement('button');
    contactButton.classList.add('navBarButton');
    contactButton.setAttribute("id","contactButton");
    contactButton.textContent = 'Contact';
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    title.textContent  = 'The Pizza Parlor'
    title.classList.add("title")
    navBarContainer.appendChild(title);    
    navBarContainer.appendChild(navBar);
    navBarContainer.classList.add("navBarContainer");
    body.prepend(navBarContainer);
}

export default loadNavBar;
import './styles/homePage.css';
import pizzaInOven from './images/pizzaInOven.jpg'


const LoadHomePage = function () {

    const homeButton = document.getElementById("homeButton")
    const menuButton = document.getElementById("menuButton");
    menuButton.classList.remove("activePage");
    const contactButton = document.getElementById("contactButton");
    contactButton.classList.remove("activePage");
    homeButton.classList.add("activePage")
    const content = document.getElementById('content');
    const navBarContainer = document.querySelector('.navBarContainer');
    const container1 = document.createElement('div');
    container1.setAttribute("id","container1");
    content.appendChild(container1);

    const container2 = document.createElement('div');
    container2.setAttribute('id','container2');


    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.setAttribute('id','aboutUsContainer');
    const aboutUsTitle = document.createElement('div');
    aboutUsTitle.textContent = 'About Us';
    aboutUsTitle.setAttribute("id",'aboutUsTitle');
    aboutUsContainer.appendChild(aboutUsTitle);
    const aboutUs = document.createElement('div')
    aboutUs.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Pulvinar pellentesque habitant morbi tristique senectus et netus. Vitae aliquet nec ullamcorper sit amet risus nullam. Sed nisi lacus sed viverra tellus in hac. Nunc sed velit dignissim sodales. Vel orci porta non pulvinar neque laoreet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Erat imperdiet sed euismod nisi porta lorem mollis. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Duis at consectetur lorem donec massa sapien. Enim lobortis scelerisque fermentum dui faucibus. Odio ut sem nulla pharetra diam. Ultrices vitae auctor eu augue ut lectus arcu. Nunc consequat interdum varius sit amet mattis vulputate enim. Adipiscing elit pellentesque habitant morbi tristique senectus et. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Sed adipiscing diam donec adipiscing tristique risus. Lacinia at quis risus sed vulputate odio.';
    aboutUs.setAttribute("id","aboutUsText");
    aboutUsContainer.appendChild(aboutUs);
    container2.appendChild(aboutUsContainer);

    const pizzaInOvenPic = new Image()
    pizzaInOvenPic.src = pizzaInOven;
    pizzaInOvenPic.setAttribute('id','pizzaInOven');
    container2.appendChild(pizzaInOvenPic);

    
    container1.appendChild(container2);
}


export default LoadHomePage;
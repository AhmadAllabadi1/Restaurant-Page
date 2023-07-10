import LoadHomePage from './homePage';
import loadNavBar from './loadNavBar';
import LoadMenuPage from './menuPage';
import LoadContactPage from './contactPage';


loadNavBar();
LoadHomePage();

function clear() {

    const parentElement = document.getElementById('content');
    parentElement.innerHTML = '';
}

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const contactButton = document.getElementById('contactButton');


homeButton.addEventListener('click', () => {
    clear();
    LoadHomePage();
})

menuButton.addEventListener('click', function () {
    clear();
    LoadMenuPage();
})

contactButton.addEventListener('click', function () {
    clear();
    LoadContactPage();
})
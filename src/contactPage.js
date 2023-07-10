import './styles/contactPage.css'
import locationImg from './images/location.png';

function LoadContactPage() {
    const homeButton = document.getElementById("homeButton")
    const menuButton = document.getElementById("menuButton");
    menuButton.classList.remove("activePage");
    const contactButton = document.getElementById("contactButton");
    contactButton.classList.add("activePage");
    homeButton.classList.remove("activePage");

    const content = document.getElementById('content')

    const form = document.createElement('form');

    const title = document.createElement('h2');
    title.textContent = 'Contact Form';
    form.appendChild(title);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    form.appendChild(emailInput);

    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('placeholder', 'Phone Number');
    form.appendChild(phoneInput);

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('placeholder', 'Message');
    form.appendChild(messageInput);


    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('id','submitButton');
    form.appendChild(submitButton);


    const locationImgContainer = new Image();
    locationImgContainer.src = locationImg;
    locationImgContainer.setAttribute('id','locationImg');

    content.appendChild(form)
    content.append(locationImgContainer);
}


export default LoadContactPage;
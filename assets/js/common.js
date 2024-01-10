// search button popup
let modalee = document.querySelector('.search-modal')
document.querySelector('#search').addEventListener('click', showSearch, hideNav)
document.querySelector('main').addEventListener('click', hideSearch)
function showSearch() {
    modalee.classList.toggle('sactive')
}
function hideSearch() {
    modalee.classList.remove('sactive')
}
// hide and show nav
document.querySelector('#tbars').addEventListener('click', showNav, hideSearch)
document.querySelector('main').addEventListener('click', hideNav)
let hiddenNav = document.querySelector('.right-nav ul')
function showNav() {
    hiddenNav.classList.toggle('nactive')
}
function hideNav() {
    hiddenNav.classList.remove('nactive')
}
// navbar action
let navBar = document.querySelector('nav')
document.addEventListener('scroll', () => {
    if (pageYOffset >= 50) {
        navBar.classList.add('stick')
    }
    else {
        navBar.classList.remove('stick')
    }
})
let navLinks = document.querySelectorAll(".right-nav li")

let ourLocation = window.location.href;
navLinks.forEach((link) => {
    let linkhref = link.querySelector('a').getAttribute('href');
    link.classList.remove('active')

    if (ourLocation.includes(linkhref)) {
        link.classList.add('active');

    }
})
let SubLinks = document.querySelectorAll('.right-nav #submenu li')
SubLinks.forEach((subLink) => {
    let parentNode = subLink.parentElement.parentElement;

    if (subLink.getAttribute('class') == "active") {
        parentNode.classList.add('active')
    }
})
// let navLogoImg = document.querySelector(".logo img");
// navLogoImg.addEventListener('load', () => {
//     navLogoImg.style.display = 'block'
// })
// navLogoImg.addEventListener('error', () => {
//     document.querySelector('.logo span').style.display = 'block';
//     navLogoImg.style.display = 'none';
// })
// send email 
let subButton = document.querySelector('#subscribeButton');
subButton.addEventListener('click', function (event) {
    let data = document.getElementById("subscribe").value;
    event.preventDefault();
    if (data != '') {
        fetch("https://formspree.io/f/mrgwkoer", {
            method: 'POST',
            body: JSON.stringify({
                Subject: "Subscribe to Jobistan.net",
                Address: data,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                document.getElementById('subscribe').value = '';
                ourHeading.innerHTML = "Success"
                messageModalText.innerHTML = "Message <span>Sent Successfully</span>";
                showModal();
                messageModalImage.src = 'assets/img/messagesent.gif'
            })
    }
    else {
        messageModalText.innerHTML = "Message <span>is Empty</span>";
        ourHeading.innerHTML = "Error"
        showModal();
        messageModalImage.src = 'assets/img/notsent.webp'
    }
})

// Message Modal
let messageModal = document.querySelector(".message-modal-box");
let messageModalText = document.querySelector(".message-modal-box .messagemodal p");
let messageModalImage = document.querySelector(".messagemodal img");
let messagemodalClose = document.querySelector(".message-modal-box .messagemodalclose");
let ourHeading = messageModal.querySelector('.headin');

function showModal() {
    messageModal.classList.add('showMessage');
}
messagemodalClose.addEventListener('click', hideModal);
messageModal.querySelector('button').addEventListener('click', hideModal);
function hideModal() {
    let ourresultBox = document.querySelector('.test-result');
    ourresultBox.classList.remove('testresult')
    messageModal.classList.remove('showMessage');
}

// goto magic 
window.addEventListener('scroll', () => {
    let gotoButton = document.querySelector('.gototop');
    if (pageYOffset >= 500) {
        gotoButton.classList.add('goactive');
    }
    else {
        gotoButton.classList.remove('goactive');
    }
    gotoButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })
})
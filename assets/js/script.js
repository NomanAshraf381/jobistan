// image loader 

setTimeout(carrdimg, 3500);
function carrdimg() {
    let cardImages = document.querySelectorAll('.card-img img')
        cardImages.forEach((cardimage) => {
        let loadimg = cardimage.getAttribute('src');
        let origd = cardimage.getAttribute('data-orig-img');
        if(origd == ""){
            cardimage.src = 'assets/img/card-def1.webp';
        }
        else if (loadimg != origd) {
            cardimage.src = origd;
        }
    })
}

// magic button js
magicButtonGo();
function magicButtonGo() {
    let magicButtons = document.querySelectorAll('.magicbutton3');

    magicButtons.forEach((magicbutton) => {
        let magicbuttonicon = magicbutton.querySelector('.btnicon')
        magicbutton.addEventListener('mouseover', () => {
            magicbuttonicon.classList.remove('fa-angle-right')
            magicbuttonicon.classList.add('fa-long-arrow-right')
            magicbutton.classList.add('btnact')
        })
        magicbutton.addEventListener('mouseout', () => {
            magicbuttonicon.classList.add('fa-angle-right')
            magicbuttonicon.classList.remove('fa-long-arrow-right')
            magicbutton.classList.remove('btnact')
        })
    })
}

// views
countviews()
function countviews() {
    let viewsCount = document.querySelectorAll('.viewzz')
    viewsCount.forEach((viewSec) => {
        let bhalue = parseInt(viewSec.getAttribute('data-view-count'))
        let result = Number(bhalue.toFixed(0)).toLocaleString().split(' ').join(',').toLocaleString()
        viewSec.closest('.card-view').title = `Views: ${result}`;
        
        if (bhalue >= 1000000000) {
            let value = bhalue / 1000000000
            viewSec.innerHTML = `${Math.floor(value)}B`
        }
        else if (bhalue >= 1000000) {
            let value = bhalue / 1000000
            viewSec.innerHTML = `${Math.floor(value)}M`
        }
        else if (bhalue >= 1000) {

            let value = bhalue / 1000
            viewSec.innerHTML = `${Math.floor(value)}K`
        }
        else {

            let value = bhalue
            viewSec.innerHTML = value;
        }
    })
}
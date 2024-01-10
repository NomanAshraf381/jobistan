
// slide counting 
window.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll(".carousel-inner .carousel-item");
    let ourIndicators = document.querySelector(".carousel-indicators");
    let arrowright = document.querySelector('.prev-control')
    let arrowleft = document.querySelector('.next-control')
    if (slides.length <= 1) {
        ourIndicators.classList.add('hideindicators');
        arrowleft.style.display = 'none';
        arrowright.style.display = 'none';
    }
})

var loadOne = false;
var startTwo = false;
var loadTwo = false;
const mainDiv = document.querySelector('main');
var loadingAnimation = document.querySelector('.loadingani')
window.addEventListener('scroll', () => {

    if (pageYOffset >= 1000 && loadOne == false) {
        loadOne = true;
        fetch('assets/Pages/main1.txt')
        .then((response) => {
                return response.text();
            })
            .then((data) => {
                mainDiv.innerHTML += data;
                countviews();
                carrdimg();
                magicButtonGo();
                startTwo = true;
            })
    }
    if (pageYOffset >= 2500 && loadTwo == false && startTwo == true) {
        loadTwo = true;
        fetch('assets/Pages/main2.txt')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                mainDiv.innerHTML += data;
                loadingAnimation.classList.add('disappear');
                countviews();
                carrdimg();
                magicButtonGo()
            })
    }

})
function gotit(element) {
    element.style.display = 'none';
}

setTimeout(() => {
    const commentIframeContainer = document.querySelector('.comments-iframe');
    const commentIframe = `<iframe 
        src="https://www.facebook.com/plugins/comments.php?href=http://techcrunch.com/2014/09/17/life-is-tough" 
        scrolling="no" 
        frameborder="0" 
        title="comments" 
        style="border:none; 
        overflow:hidden; 
        width:100%; 
        height:400px;" 
        allowTransparency="true">
    </iframe>`
    commentIframeContainer.innerHTML = commentIframe;
}, 7000);

let ourCarousel = document.querySelector('#carouselExampleIndicators')
var carouselACT = false;
window.addEventListener('scroll', () => {
    if (pageYOffset > 500 && carouselACT == false) {
        carouselACT = true;
        fetch('assets/Pages/blogcarousel.txt')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                ourCarousel.innerHTML = data;
                countviews();
                carrdimg();
            })
    }
})


let TableofContentLis = document.querySelectorAll('.sublist li');
TableofContentLis.forEach((tableli) => {
    tableli.addEventListener('click', () => {
        let targetId = tableli.getAttribute("data-go")
        let targetPosition = document.getElementById(targetId).offsetTop - 80;
        window.scrollTo({ top: targetPosition, behavior: "smooth" })
    })
})

let MainListItems = document.querySelectorAll('.mainlist>li span');
MainListItems.forEach((tableli) => {
    tableli.addEventListener('click', () => {
        let targetId = tableli.getAttribute("data-go")
        let targetPosition = document.getElementById(targetId).offsetTop - 80;
        window.scrollTo({ top: targetPosition, behavior: "smooth" })
    })
})

let ourLables = document.querySelectorAll('.quizquestionoptions label input');
ourLables.forEach((label) => {
    label.addEventListener('click', () => {
        ourLables.forEach((inp) => {
            let parent = inp.parentElement
            if (inp.checked == true) {
                parent.classList.add('check');
            }
            else {
                parent.classList.remove('check')
            }
        })
    })
})

let quizButton = document.querySelector('.quizsection button');
quizButton.addEventListener('click', evaluate);
function evaluate() {
    let testSection = this.parentElement;
    let totalQuestions = testSection.querySelectorAll('.quizquestionoptions').length;
    var allOptions = testSection.querySelectorAll('input');
    var Correct = 0;
    var pressedButton = this.firstElementChild
    if (pressedButton.innerHTML == 'Check Result') {
        allOptions.forEach((option) => {
            let parent = option.parentElement;

            if (option.getAttribute('data-correct') == 'y' && option.checked) {
                parent.classList.add('trueoptselected')
                parent.querySelector('span').innerHTML = "&check;"
                Correct++;
            }
            else if (option.getAttribute('data-correct') != 'y' && option.checked) {
                parent.querySelector('span').innerHTML = "&times;"
                parent.classList.add('falseoptselected');

            }
            option.disabled = true;
        })
        let messageBox = document.querySelector(".message-modal-box");
        let ourMessage = messageBox.querySelector('p');
        let resultBox = messageBox.querySelector('.test-result');
        let correctBox = messageBox.querySelector('.test-correct');
        let falseBox = messageBox.querySelector('.test-false');
        let percentBox = messageBox.querySelector('.test-percentage');
        let bigmessage = messageBox.querySelector('.headin').innerHTML = "Result";
        resultBox.classList.add('testresult')
        let ourMessageImg = messageBox.querySelector('img');
        pressedButton.innerHTML = "Test Again";
        let percent = (100 * Correct) / totalQuestions;
        ourMessage.innerHTML = "Quiz Result:"
        percentBox.innerHTML = `${percent}%<br>Percent`;
        correctBox.innerHTML = `${Correct}<br>Correct`;
        falseBox.innerHTML = `${totalQuestions - Correct}<br>False`;
        if (percent >= 75) {
            messageBox.classList.add('showMessage');
            ourMessageImg.src = 'assets/img/perfect.gif';
        }
        else if (percent >= 50) {
            messageBox.classList.add('showMessage');
            ourMessageImg.src = 'assets/img/good.gif';
        }
        else {
            messageBox.classList.add('showMessage');
            ourMessageImg.src = 'assets/img/bad.gif';
        }
    }
    else {
        pressedButton.innerHTML = 'Check Result';
        allOptions.forEach((option) => {
            option.checked = false;
            option.disabled = false;
            let parent = option.parentElement;
            parent.classList = ''
            parent.querySelector('span').innerHTML = " "
        })
    }
}
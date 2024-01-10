const ourIframeContainer = document.getElementById('iframe-container');
setTimeout(() => {
    const ourIframe =
        `<iframe 
            src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9655054271157!2d71.9157354145998!3d30.29504361364653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b554b068b1b21%3A0x7517d8adc887c625!2sDigital%20Applications!5e0!3m2!1sen!2s!4v1677411866697!5m2!1sen!2s'
            width = '600' 
            height = '450' 
            style.border = '0' 
            title = 'Our Location' 
            allowfullscreen = true 
            referrerpolicy = 'no-referrer-when-downgrade' >
        </iframe>`
    ourIframeContainer.innerHTML = ourIframe;
}, 7000);

setTimeout(() => {
    (function () { var w = window, C = '___grecaptcha_cfg', cfg = w[C] = w[C] || {}, N = 'grecaptcha'; var gr = w[N] = w[N] || {}; gr.ready = gr.ready || function (f) { (cfg['fns'] = cfg['fns'] || []).push(f); }; w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/'; (cfg['render'] = cfg['render'] || []).push('onload'); w['__google_recaptcha_client'] = true; var d = document, po = d.createElement('script'); po.type = 'text/javascript'; po.async = true; var m = d.createElement('meta'); m.httpEquiv = 'origin-trial'; m.content = 'Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0='; d.head.prepend(m); po.src = 'https://www.gstatic.com/recaptcha/releases/lLirU0na9roYU3wDDisGJEVT/recaptcha__en.js'; po.crossOrigin = 'anonymous'; po.integrity = 'sha384-lwJiw+OT2isqLl772nPjNV34ltQfNiSOLIjtbaIB6FcFv8R12U/NaJ6yYpei3RPl'; var e = d.querySelector('script[nonce]'), n = e && (e['nonce'] || e.getAttribute('nonce')); if (n) { po.setAttribute('nonce', n); } var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
}, 7000)

// send email 

let messageButton = document.querySelector('#sendmess');
messageButton.addEventListener('click', function (event) {
    event.preventDefault();
    let ourSubject = document.getElementById('subject');
    let ourName = document.getElementById('name');
    let ourEmail = document.getElementById('email');
    let ourMessage = document.getElementById('message');
    if (ourSubject.value != "" && ourName.value != "" && ourEmail.value != "" && ourMessage.value != "") {
        if(grecaptcha.getResponse() != ''){
            fetch("https://formspree.io/f/mrgwkoer", {
                method: 'POST',
                body: JSON.stringify({
                    Subject: ourSubject.value,
                    Name: ourName.value,
                    Email: ourEmail.value,
                    Message: ourMessage.value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(() => {
                    ourSubject.value = '';
                    ourName.value = '';
                    ourEmail.value = '';
                    ourMessage.value = '';
                    let messageBoxcon = document.querySelector(".message-modal-box");
                    let ourMessagecon = messageBoxcon.querySelector('p');
                    let ourMessageImgcon = messageBoxcon.querySelector('img');
                    let messageheading = document.querySelector(".messagemodal .headin");
                    messageheading.innerHTML = "Success";
                    ourMessagecon.innerHTML = `Message Sent <span>Successfully</span>`;
                    messageBoxcon.classList.add('showMessage');;
                    ourMessageImgcon.src = 'assets/img/messagesent.gif';
            })
            .catch(() => {
                    let messageBoxcon = document.querySelector(".message-modal-box");
                    let ourMessagecon = messageBoxcon.querySelector('p');
                    let ourMessageImgcon = messageBoxcon.querySelector('img');
                    let messageheading = document.querySelector(".messagemodal .headin");
                    messageheading.innerHTML = "Error";
                    ourMessagecon.innerHTML = `Message <span>Not </span>Sent <br><span>Please</span> Try Again`
                    messageBoxcon.classList.add('showMessage');
                    ourMessageImgcon.src = 'assets/img/notsent.webp';
            })
        }
        else {
            alert("Please Fill Recaptcha");
        }
    }
    else {
        let messageBoxcon = document.querySelector(".message-modal-box");
        let ourMessagecon = messageBoxcon.querySelector('p');
        let ourMessageImgcon = messageBoxcon.querySelector('img');
        let messageheading = document.querySelector(".messagemodal .headin");
        messageheading.innerHTML = "Error";
        ourMessagecon.innerHTML = `Please <span>Fill</span> All The Fields`
        messageBoxcon.classList.add('showMessage');
        ourMessageImgcon.src = 'assets/img/bad.gif';
    }
})

changepic()
window.addEventListener('resize', changepic)
function changepic() {
    let pic = document.querySelector('.information img');
    let newSrc = pic.getAttribute('data-orig-img');
    pic.src = newSrc;

}
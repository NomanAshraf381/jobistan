// load more button 
let ourRow = document.querySelector('.seo-row');
let loadingButton = document.querySelector('.magicbutton3.load');
var loaded = false;
loadingButton.addEventListener("click" , () => {
    if(loaded == false){
        loadingButton.style.visibility = 'hidden';
        loaded = true;
        let gif = document.querySelector('.loading');
        gif.style.display = 'inline-block';
        fetch("assets/Pages/seo.txt")
        .then((response) => {
            return response.text();
        })
        .then((data)=> {
            ourRow.innerHTML += data;
            gif.style.display = 'none';
            loadingButton.style.visibility = 'visible';
            countviews();
            carrdimg();
        })
    }
})
let scrollButton = document.querySelector('.magicbutton3.scroll');
scrollButton.addEventListener('click', () => {
    let target = document.querySelector(".pp2").offsetTop - 50;
    window.scrollTo({top: target, behavior: "smooth"})
})

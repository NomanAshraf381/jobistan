let ourResults = document.querySelector('.popular').offsetTop;
let searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', function(){
    window.scrollTo({top: ourResults, behavior: "smooth"})
})
const hamburger = document.getElementById('hamburger');
const links = document.getElementById ('links');

hamburger.addEventListener('click', () =>{
    links.classList.toggle('show');
})
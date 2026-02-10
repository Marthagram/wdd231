 const hamButton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');


hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('show')
    navlinks.classList.toggle('show')
});
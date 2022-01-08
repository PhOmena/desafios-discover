let getSidebar = document.querySelector('nav');
let getToggle = document.getElementById('toggle')

for(var i = 0; i <= getToggle.length; i++) {
    getToggle[i].addEventListener('click', () => {
        getSidebar.classList.toggle('active')
    });
}
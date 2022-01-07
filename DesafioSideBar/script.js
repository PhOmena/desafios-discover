var getSidebar = document.querySelector('nav');
var getToggle = document.getElementsByClassName('toggle');
for (var i = 0; i <= getToggle.length; i++) {
    getToggle[i].addEventListener('click', function () {
        getSidebar.classList.toggle('active');
    });
}
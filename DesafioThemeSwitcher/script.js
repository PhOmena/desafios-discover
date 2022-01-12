ball = document.querySelector("#ball");
ballh1 = document.querySelector(".ballh1");
background = document.querySelector(".container")


ball.onclick = () => {
    background.classList.toggle("active");
    ballh1.classList.toggle("active");
}
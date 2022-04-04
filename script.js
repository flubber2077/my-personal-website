const h2 = document.createElement("h2");
h2.textContent = "";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('sidenav');
input.addEventListener('click', function() {
let red = (Math.random() * 100) + 150;
let blue = (Math.random() * 100) + 150;
let green = (Math.random() * 100) + 150;
let backgroundColor = `rgb (${red}, ${blue}, ${green}`;
document.body.style.background = backgroundColor;
});
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("down", window.scrollY > 0);
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu-links');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activated');
    barras.forEach(child => {child.classList.toggle('animated')});
    ham.classList.toggle('rotate');
});

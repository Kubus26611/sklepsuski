// zmiana zdj na karcie

var container = document.getElementById("image-container");

function change_img(image) {
    container.src = image.src;
}

var container1 = document.getElementById("image-container1");

function change_img1(image) {
    container1.src = image.src;
}

var container2 = document.getElementById("image-container2");

function change_img2(image) {
    container2.src = image.src;
}

var container3 = document.getElementById("image-container3");

function change_img3(image) {
    container3.src = image.src;
}

var container4 = document.getElementById("image-container4");

function change_img4(image) {
    container4.src = image.src;
}


//burger 
const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');



burgerIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');

})
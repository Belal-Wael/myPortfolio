let toogleMenue = document.getElementById('icon');
let navBar = document.getElementById('links');
// let toogleButton = document.getElementsByClassName('toogle-button');
toogleMenue.onclick = () => {
    toogleMenue.classList.toggle('fa-x');
    navBar.classList.toggle('active');
}

// remove toogle-menue when click
let links = document.querySelectorAll('.nav li a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        toogleMenue.classList.remove('fa-x');
        navBar.classList.remove('active');
    })
}

//toogle-button

// toogleButton.addEventListener('click', function () {
//     toogleButton.style.
// })


window.onscroll = () => {

}
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 150
});
ScrollReveal().reveal('.home .info,.heading', { origin: 'top' });
ScrollReveal().reveal('.home .image,.portfolio a,form', { origin: 'bottom' });

// frontend developer
const type = new Typed('.text-change', {
    strings: ['Web Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    
    if(windowScroll>50){
        $("header").css("background",'rgba(0,0,0,0.7)');

    }
});
$("a[href^='#']").click(function(eve){
    let href=eve.target.getAttribute('href'); // #home , #contact
    let sectionOffset=$(href).offset().top; // 50
    $("html,body").animate({scrollTop:sectionOffset},1000); //  
})
//header
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let navbar = document.querySelector('.header .flex .navbar');
let menuLinks = document.querySelectorAll('.menu_link');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}
closeBtn.onclick = () => {
    navbar.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Function to remove 'active-link' class from all links
function removeActiveLinks() {
    menuLinks.forEach(link => {
        link.classList.remove('active-link');
    });
}

// Add click event to each menu link
menuLinks.forEach(link => {
    link.onclick = () => {
        removeActiveLinks();
        link.classList.add('active-link');
    }
});


const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Anis Farahin";
    }, 0);
    setTimeout(() => {
        text.textContent = "Anis Farahin";
    }, 4000);
}

textLoad();

//popup video
//popup video
const buttons = document.querySelectorAll(".projects .boxBx .box .btn_2 .demo");
const close = document.querySelector(".popup-video span");
const demo = document.querySelector(".popup-video");
const video = document.querySelector(".popup-video video");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        demo.style.display = "block";
        demo.style.opacity = 1;
    });
});

close.addEventListener('click', () => {
    demo.style.display = "none";
    demo.style.opacity = 0;
    video.pause();  // Optional: Pause the video when closing the popup
});
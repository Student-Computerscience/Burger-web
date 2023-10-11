const Burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-open");
const Closde = document.getElementById("nav-open");
const navLink =document.querySelectorAll(".nav__link");


navLink.forEach(link => {
    link.addEventListener("click", ()=> {
        navMenu.classList.add("hidden")
    });
});

Closde.addEventListener("click" , () => {
    navMenu.classList.add("hidden")
});

Burger.addEventListener("click" , () => {
    navMenu.classList.remove("hidden")
});


const tabs = document.querySelectorAll(".tabs_wrap ul li");
tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
    tabs.forEach(tab => {
        tab.classList.remove("active")
    })
       tab.classList.add('active')
    })
})

const html = document.querySelector("html");
const theembtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}
else{
    lightMode();
}

theembtn.addEventListener("click", (e) =>{
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }
    else{
        lightMode();
    }
});
    
   // lightMode
function lightMode () {
    html.classList.remove('dark');
    theembtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light")
 }    
   //remove dark mode code

function darkMode () {
   html.classList.add('dark');
   theembtn.classList.replace("ri-moon-line", "ri-sun-line");
   localStorage.setItem("mode", "dark")
}   

const scrollup = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll", scrollup);

const scrollHeader = () => {
    const Header = document.getElementById("header");
    if(this.scrollY >= 50){
        Header.classList.add("border-b","border-secondyColor");
    }
    else{
        Header.classList.remove("border-b","border-secondyColor");
    }
}
window.addEventListener("scroll", scrollHeader);

//active link 
const activeLink = () =>{
    const section = document.querySelectorAll("section");
    const navLink = document.querySelectorAll(".nav__link");

    let current = "home";

    section.forEach((section) =>{
        const sectionTop = section.offsetTop;
        if(this.scrollY >= -60) {
            current = section.getAttribute("id");
        }
    });

    navLink.forEach((item) => {
       item.classList.remove("text-secondyColor");

       if(item.href.includes(current)) {
        item.classList.add("text-secondyColor");
       }
    });
};

window.addEventListener("scroll", activeLink);

let tl = gsap.timeline()
tl.from("#home img",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0
})

tl.from("#home-con",{
    y: 100,
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from("#Category #card",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#Category",
        scroller:"body",
        // markers: true,
        start:"top 50%",
        end:"top 10%",
        scrub:2
    }
}) 

tl.from("#promo #card-1",{
    x:-500,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#promo",
        scroller:"body",
        // markers: true,
        start:"top 60%",
        end:"top 30%",
        scrub:3
    }
})

tl.from("#promo #card-2",{
    x:500,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#promo",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:3
    }
})

tl.from("#about img",{
    y:-600,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:4
    }
})

tl.from("#about-con",{
    y: 600,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:4
    }
})

tl.from("#menu #menu-head",{
    scale:0,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        start:"top 75%",
        end:"top 40%",
        scrub:3,
    }
}) 
tl.from(".menu__items li",{
    y:-800,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".menu__items",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:3,
    }
})

tl.from("#review-con",{
    scale:0,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#review-con",
        scroller:"body",
        start:"top 95%",
        end:"top 50%",
        scrub:3
    }
}) 
tl.from(".swiper li",{
    x:500,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".swiper",
        scroller:"body",
        start:"top 95%",
        end:"top 50%",
        scrub:3
    }
})

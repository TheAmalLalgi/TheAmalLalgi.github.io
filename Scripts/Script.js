// Preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('preloader--done');
})

// GSAP
gsap.registerPlugin(ScrollTrigger);
const fadeElements = gsap.utils.toArray('.fade');

window.addEventListener('load', () => {
    let tl = gsap.timeline();
      tl.from('.Home__Content', {opacity: 0, duration: 1, x: -50})

    fadeElements.forEach((elem, i) => {
        const anim = gsap.fromTo(elem, { autoAlpha: 0, y: 50}, { duartion: 1, autoAlpha: 1, y: 0 });
        ScrollTrigger.create({
            trigger: elem,
            animation: anim,
            toggleActions: 'play none none none',
            once: true
        })
    })
})

// Special Random Colors
let Colors = ["#F4005F", "#98E024", "#FA8419", "#9D65FF"];

const randomColor = () => {
    randomColorIndex = Math.floor(Math.random() * Colors.length);
    selectedColor = Colors[randomColorIndex];
    document.documentElement.style.setProperty('--accent-color', `${selectedColor}`);
}; randomColor();

// Random Pacman Logo
let PacmanSprites = [];

for (let i = 1; i <= 10; i++) {
    let pacmanLogo = `Pacman-Sprite-(${i}).png`;
    PacmanSprites.push(pacmanLogo);
};

const randomLogoGenerator = () => {
    let pacmanRandomIndex = Math.floor(Math.random() * PacmanSprites.length);
    newLogo = PacmanSprites[pacmanRandomIndex]
    document.querySelector('#Logo').src = `./Assets/Images/Sprites/Pacman-Sprites/${newLogo}`;
}; randomLogoGenerator();

// Greeting
const greeting = document.querySelector(".Home__Content__Greeting");
let today = new Date();
let currentHour = today.getHours();

if (currentHour < 12) {
    greeting.innerText = "Good Mornin'";
} else if (currentHour < 18) {
    greeting.innerText = "Good Afternoon!";
} else if (currentHour = 0) {
    greeting.innerText = "Early bird!";
} else {
    greeting.innerText = "Good Evenin'";
}

// Pokemon Game
const randomPokemon = () => {
    // import all images into a list
    let PokemonImages = [];

    for (let i = 1; i < 650; i++) {
        let images = `Pokemon-(${i}).png`;
        PokemonImages.push(images);
    };

    // Elements
    let message = document.querySelector('#Game__desc__right__message');
    const globalRandomIndex = Math.floor(Math.random() * PokemonImages.length);
    const cross = document.querySelector('#cross');
    const shinyRandomIndex = Math.floor(Math.random() * 141441);
    let shinyCount = 0;

    // Shiny Encounters
    if (shinyRandomIndex == 1) {
        const shinyRandomSlots = () => {
            randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex3 = Math.floor(Math.random() * PokemonImages.length);

            newImage1 = PokemonImages[randomIndex1];
            newImage2 = PokemonImages[randomIndex2];
            newImage3 = PokemonImages[randomIndex3];

            document.getElementById('image-wrapper1').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage1}`;
            document.getElementById('image-wrapper2').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage2}`;
            document.getElementById('image-wrapper3').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage3}`;
        }; shinyRandomSlots();
    } else {
        // Normal Encounters
        const randomSlots = () => {
            randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex3 = Math.floor(Math.random() * PokemonImages.length);

            newImage1 = PokemonImages[randomIndex1];
            newImage2 = PokemonImages[randomIndex2];
            newImage3 = PokemonImages[randomIndex3];

            document.getElementById('image-wrapper1').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage1}`;
            document.getElementById('image-wrapper2').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage2}`;
            document.getElementById('image-wrapper3').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage3}`;
        }; randomSlots();
    }
}; randomPokemon();

// Navigation
const navBar = document.querySelector(".Nav__Links");
const burger = document.querySelector(".burger");
const close = document.querySelector("svg.close");
const nav = document.querySelector('nav');
const body = document.body;
let lastScrollTop = 0;

burger.onclick = () => {
    navBar.classList.toggle('Nav__Links--open');
}
close.onclick = () => {
    navBar.classList.toggle('Nav__Links--open');
}

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-100%';
    } else {
        nav.style.top = '0%';
    }
    lastScrollTop = scrollTop
})

// Contact Form 
const form = document.querySelector('form.email-form');

const reset = () => {
    form.reset();
}

// ColorSchemes
const themeToggle = document.querySelector('.theme-toggle');
let darkMode = localStorage.getItem('darkMode');

const transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
const enableDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode', 'enabled');
    document.querySelector('#hero-img').src = `./Assets/Images/hero/hero-(2).jpg`
    transition();
}
const enableLightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('darkMode', null);
    document.querySelector('#hero-img').src = `./Assets/Images/hero/hero-(1).jpg`
    transition();
}

if (darkMode !== 'enabled') {
    enableLightMode();
}

themeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
})

// Random Hero image
// const heroImage = document.querySelector('#hero-img');
// const heroRandomIndex = Math.floor(Math.random() * 3);
// const heroImagePath = `./Assets/Images/hero/Hero-(${heroRandomIndex}).jpg`;
// const randomHeroImage = () => {
//     heroImage.src = heroImagePath;
// }; randomHeroImage();
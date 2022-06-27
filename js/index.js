

const fullPageElement = document.getElementById('fullpage');
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.menu__navigation');
const closeButton = document.querySelector('.close__icon');
const blurOverlay = document.querySelector('.blur__overlay');
const more = document.querySelector('.more');
const closeMore = document.querySelector('.more__close');
const moreBlock = document.querySelector('.more__block');
const back = document.querySelector('.back');

const IS_ACTIVE = 'is--active';

function toggleNavigationMenu() {
    fullPageElement.classList.toggle('no-scroll')
    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE);  
}

function toggleMore() {
    if (moreBlock.style.display == "") {
        moreBlock.classList.toggle(IS_ACTIVE);
        
    } else {
        moreBlock.style.display = "none"
    }  
}



const CLICK = 'click';

menuButton.addEventListener(CLICK, toggleNavigationMenu);
closeButton.addEventListener(CLICK, toggleNavigationMenu);
blurOverlay.addEventListener(CLICK, toggleNavigationMenu);
more.addEventListener(CLICK, toggleMore);
back.addEventListener(CLICK, toggleMore);
closeMore.addEventListener(CLICK, function () {toggleNavigationMenu(toggleMore())});




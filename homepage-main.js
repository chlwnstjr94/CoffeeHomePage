// 풀페이지
TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    navigation: true,
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigationTooltips: ['Home', 'Menu', 'Skills', 'Portfolio']
});

// 버튼 클릭시 로고와 버튼 흰색으로 변경
const whiteBtn = document.querySelector('.navBtn')

const whiteLogo = document.querySelector('.logo')

let colorWhite = false;

// navbar animation
const navBtn = document.querySelector('.navBtn');

let openBtn = false;

// menu open
const menu = document.querySelector('.menu');

let openMenu = false;

// 메뉴버튼 전체 선택
const menuAllBtn = document.querySelectorAll('.menuBtn');

let changeEffect = false;

// 버튼 시 작동
navBtn.addEventListener('click', () => {
    if (!openBtn) {
        navBtn.classList.add('open');
        openBtn = true;

        whiteBtn.classList.add('white');
        whiteLogo.classList.add('white');
        colorWhite = true;

        menu.classList.add('open');
        openMenu = true;

        menuAllBtn.forEach((item) => {
        item.classList.remove('menuEffect');
        item.classList.add('pullRight');
        });
        changeEffect = true;

    } else {
        navBtn.classList.remove('open');
        openBtn = false;

        whiteBtn.classList.remove('white');
        whiteLogo.classList.remove('white');
        colorWhite = false;

        menu.classList.remove('open');
        openMenu = false;

        menuAllBtn.forEach((item) => {
            item.classList.remove('pullRight');
            item.classList.add('menuEffect');
        });
        changeEffect = false;
    }
});

// 메뉴 호버

const menuEffect = document.querySelectorAll('.menuEffect');

menuEffect.forEach(effect => {
    effect.addEventListener('mouseenter', function(e) {
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });
});
// 풀페이지
TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    navigation: true,
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigationTooltips: ['Home', 'Menu', 'Skills', 'Portfolio']
});

//
VanillaTilt.init(document.querySelectorAll(".card3D"), {
    max: 25,
    speed: 400
});


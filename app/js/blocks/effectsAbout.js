var buldSodeSolushion = function () {
    var
        containerAbout = document.querySelector('.about'),
        nodeSolushion = document.querySelector('.about__icon_zadach'),
        nodeSolushionLeft = document.querySelector('.about').getBoundingClientRect().right - nodeSolushion.offsetWidth - 20,
        arrPoint = [];

    nodeSolushion.style.left = nodeSolushionLeft + 'px';
};

var addNewIcon = function (className, timeAnimate) {
    var
        containerAbout = document.querySelector('.about');

    setTimeout(function () {
        var div = document.createElement('div');
        div.className = 'about__icon ' + className;
        containerAbout.appendChild(div);
    }, timeAnimate);
};

var addClassVisible = function (className, timeAdd) {
    setTimeout(function () {
        document.querySelector(className).classList.add('visible');
    }, timeAdd)

};

var effectsAbout = function () {
    var
        containerAbout = document.querySelector('.about'),
        nodeSolushion = document.querySelector('.about__icon_zadach'),
    aboutTechnology = document.querySelector('.about__icon_technology'),
        topAboutTechnology = containerAbout.getBoundingClientRect().top + aboutTechnology.offsetHeight;

    aboutTechnology.style.top = '-' + topAboutTechnology + 'px';


    buldSodeSolushion(); //zadach

    // addNewIcon('about__icon_effect', 0); //effect

    addNewIcon('about__icon_creative', 1000 * 3.5); //creative
    addClassVisible('.about__icon_creative', 1000 * 3 + 510);


    addClassVisible('.about__icon_iweb', 1000 * 3 + 810);

    // addNewIcon('about__icon_technology', 1000 * 4 + 200);
    setTimeout(function () {
        containerAbout.style.overflow = 'visible';

    }, 1000 * 4 + 810);
    addClassVisible('.about__icon_technology', 1000 * 4 + 330);

    addNewIcon('about__icon_dlya', 1000 * 3 + 520);

    setTimeout(function () {
        nodeSolushion.classList.add('left');
    }, 1000 * 5);

    setTimeout(function () {
        nodeSolushion.classList.add('visible');
        nodeSolushion.classList.remove('left');
    }, 1000 * 6)

    // addClassVisible('.about__icon_zadach', 1000 * 5);

    addClassVisible('.about__icon_resheniya', 1000 * 4 + 530);

    addNewIcon('about__icon_bussines', 1000 * 4);


};


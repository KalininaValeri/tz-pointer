$(function () {
    var
        containerAbout = document.querySelector('.about'),
        time = 0;

    var buldSodeSolushion = function(){
        var
            nodeSolushion = document.querySelector('.about__icon_zadach');
            nodeSolushionLeft = containerAbout.getBoundingClientRect().right - nodeSolushion.offsetWidth - 20,
            arrPoint = [];

        nodeSolushion.style.left = nodeSolushionLeft + 'px';
    };

    document.querySelector('.container').style.height = window.innerHeight + 'px';

    buldSodeSolushion();

    var addNewIcon = function (className, timeAnimate) {
        setTimeout(function () {
            var div = document.createElement('div');
            div.className = 'about__icon ' + className;
            containerAbout.appendChild(div);
        }, timeAnimate);
    };

    var addClassVisible = function(className, timeAdd) {
        setTimeout(function () {
            document.querySelector(className).classList.add('visible');
        }, timeAdd)

    };

    addNewIcon('about__icon_effect', time);

    addNewIcon('about__icon_creative', 1000 * 3.5);
    addClassVisible('.about__icon_creative', 1000 * 3.5 + 10);


    addNewIcon('about__icon_iweb', 1000 * 3.5 + 300);
    addClassVisible('.about__icon_iweb', 1000 * 3.5 + 300 + 10);

    addNewIcon('about__icon_technology', 1000 * 3.5 + 300 + 500);
    setTimeout(function () {
        var
            aboutTechnology = document.querySelector('.about__icon_technology'),
            topAboutTechnology = containerAbout.getBoundingClientRect().top + aboutTechnology.offsetHeight;

        containerAbout.style.overflow = 'visible';
        aboutTechnology.style.top = '-' + topAboutTechnology + 'px';
    }, 1000 * 3.5 + 300 + 500 + 10);
    addClassVisible('.about__icon_technology', 1000 * 3.5 + 300 + 500 + 30);

    addNewIcon('about__icon_dlya', 1000 * 3.5 + 300 + 20);

    addClassVisible('.about__icon_zadach', 1000 * 3.5 + 2000);

    addNewIcon('about__icon_resheniya', 1000 * 3.5 + 3000 + 20);
    addClassVisible('.about__icon_resheniya', 1000 * 3.5 + 3000 + 20 + 10);

    addNewIcon('about__icon_bussines', 1000 * 3.5 + 3000 - 500);

    setInterval(function () {
        document.querySelector('.link-portfolio').classList.remove('invisible');
    }, 1000 * 3.5 + 3000 + 3000);

    setInterval(function () {
        document.querySelector('.logo').classList.remove('invisible');
    }, 1000 * 3.5 + 3000 + 3000 + 5000);

    // setInterval(function () {
    //     document.querySelector('.logo').classList.remove('invisible');
    // }, 1000 * 3.5 + 3000 + 3000 + 5000);

    arrPoint = document.querySelectorAll('.contact__point');
    var
        timeNode = 0,
        counter = 0;

    var addPoint = function () {


        // setInterval(function () {
        //     console.log(arrPoint[counter]);
        // }, timeNode);

        console.log(arrPoint[counter]);

        if (counter < 3) {
            counter = counter + 1;
            timeNode = timeNode + 500;
            addPoint();
        } else {
            return false;
        }
    };

    addPoint();


});
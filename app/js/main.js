$(function () {
    //animasthoin slide 1

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

    setInterval(function(){
        arrPoint = document.querySelectorAll('.contact__point');

        var
            timeNode = 0,
            counter = 0,
            timer;

        function each() {
            arrPoint[counter].classList.remove('invisible');

            counter = counter + 1;
            timer = setTimeout(each, 500);

            if (counter == arrPoint.length) {
                clearTimeout(timer);
            }
        }

        each();
    }, 1000 * 3.5 + 3000 + 3000 + 6000)

    document.querySelector('.slider').addEventListener('click', function () {


        document.querySelector('.slide.active').classList.add('prev');
        document.querySelector('.slide.active').classList.remove('active');

        document.querySelector('.slide.next').classList.add('active');
        document.querySelector('.slide.next').classList.remove('next');

        setTimeout(function () {
            document.querySelector('.slide.prev').classList.add('next');
            document.querySelector('.slide.prev').classList.remove('prev');
        }, 1000);



        console.log('123');
    });





});
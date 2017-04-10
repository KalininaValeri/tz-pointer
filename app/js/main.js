$(function () {
    //animasthoin slide 1

    var
        containerAbout = document.querySelector('.about'),
        time = 0,
        inputName = document.querySelector('.form-slide__input_name'),
        inputPhone = document.querySelector('.form-slide__input_phone'),
        btnSubmitForm = document.querySelector('.form-slide__btn');

    var buldSodeSolushion = function () {
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

    var addClassVisible = function (className, timeAdd) {
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

    setInterval(function () {
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
    }, 1000 * 3.5 + 3000 + 3000 + 6000);

    // document.querySelector('.slider').addEventListener('click', function () {
    //
    //
    //     document.querySelector('.slide.active').classList.add('prev');
    //     document.querySelector('.slide.active').classList.remove('active');
    //
    //     document.querySelector('.slide.next').classList.add('active');
    //     document.querySelector('.slide.next').classList.remove('next');
    //
    //     setTimeout(function () {
    //         document.querySelector('.slide.prev').classList.add('next');
    //         document.querySelector('.slide.prev').classList.remove('prev');
    //     }, 1000);
    //
    //
    //
    // });

    var validInputPhone = function (event) {

        //enter only number
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode == 187 && event.shiftKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }

    };

    inputPhone.addEventListener('keydown', validInputPhone);
    inputPhone.addEventListener('focus', function () {

        var str = inputPhone.value;

        if (str.substring(0, 2) === '+7') {
            str = str.replace(str.substring(0, 2), '');
        }

        inputPhone.value = '+7' + str;

    });

    var valid = function () {
        var validNumber = 0;

        if (inputName.value !== '') {
            validNumber = validNumber + 1;
        }

        if (inputPhone.value.length >= 11) {
            validNumber = validNumber + 1;
        }

        return validNumber;
    };


    document.querySelector('.form-slide.disable').addEventListener('keydown', function () {

        var
            inputValid = valid();

        if (inputValid === 2) {
            btnSubmitForm.classList.remove('disable');
        }

        if (inputValid !== 2) {
            btnSubmitForm.classList.add('disable');
        }

    });

    document.querySelector('.form-slide.disable').addEventListener('submit', function (e) {
        e.preventDefault();
        var validNumberSub = valid();

        if (validNumberSub !== 2) {
            return false;
        }

        document.querySelector('.slide.active').classList.add('prev');
        document.querySelector('.slide.active').classList.remove('active');

        document.querySelector('.slide.next').classList.add('active');
        document.querySelector('.slide.next').classList.remove('next');

        setTimeout(function () {
            document.querySelector('.slide.prev').classList.add('next');
            document.querySelector('.slide.prev').classList.remove('prev');
        }, 1000);

        console.log('submit');
    });


});
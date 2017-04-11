var effectsHeader = function(){
    setTimeout(function () {
        document.querySelector('.link-portfolio').classList.remove('invisible');
    }, 1000 * 5);

    setTimeout(function () {
        document.querySelector('.logo').classList.remove('invisible');
    }, 1000 * 8);

    setTimeout(function () {
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
    }, 1000 * 9);
};
var effectsHeader = function(){
    setInterval(function () {
        document.querySelector('.link-portfolio').classList.remove('invisible');
    }, 1000 * 7 + 500);

    setInterval(function () {
        document.querySelector('.logo').classList.remove('invisible');
    }, 1000 * 12 + 500);

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
    }, 1000 * 13 + 500);
};
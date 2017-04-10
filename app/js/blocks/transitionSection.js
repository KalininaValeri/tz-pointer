var transitionSectionAbout = function(event){
    var
        about = document.querySelector('.about'),
        btnPortfolio = document.querySelector('.link-portfolio'),
        slider = document.querySelector('.slider'),
        arrPoints = [];

    event.preventDefault();

    arrPoints = document.querySelectorAll('.contact__point');

    for (var i = 0; i < arrPoints.length; i++) {
        arrPoints[i].classList.add('invisible');
    }

    btnPortfolio.classList.add('jump');
    setTimeout(function(){
        about.classList.add('jump');
    }, 100);

    setTimeout(function(){
        btnPortfolio.classList.add('bottom');
    }, 200);

    setTimeout(function(){
        about.classList.add('bottom');

    }, 400);

    setTimeout(function(){
        slider.classList.remove('bottom');
        slider.classList.add('jump');

        about.classList.remove('jump');
        btnPortfolio.classList.remove('jump');
        btnPortfolio.classList.remove('bottom');
    }, 900);

    setTimeout(function(){
        slider.classList.remove('jump');
    }, 1100);

};

var transitionSectionSlider = function(event){
    var
        about = document.querySelector('.about'),
        paginator = document.querySelector('.slider-paginator'),
        btnPortfolio = document.querySelector('.link-portfolio'),
        slider = document.querySelector('.slider'),
    arrPoints = [];

    arrPoints = document.querySelectorAll('.contact__point');

    event.preventDefault();

    paginator.classList.add('invisible');
    slider.classList.add('jump');

    setTimeout(function(){
        slider.classList.add('bottom');
        slider.classList.remove('jump');
    }, 100);

    setTimeout(function(){
        paginator.classList.remove('invisible');

        for (var i = 0; i < arrPoints.length; i++) {
            arrPoints[i].classList.remove('invisible');
        }

        about.classList.remove('bottom');
        about.classList.add('jump');
    }, 500);

    setTimeout(function(){
        btnPortfolio.classList.add('jump');
    }, 600);

    setTimeout(function(){
        btnPortfolio.classList.remove('jump');
    }, 700);

    setTimeout(function(){
        about.classList.remove('jump');
    }, 800);



};
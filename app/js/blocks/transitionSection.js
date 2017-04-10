var transitionSection = function(event){
    var
        about = document.querySelector('.about'),
        btnPortfolio = document.querySelector('.link-portfolio'),
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


        about.classList.remove('jump');
        btnPortfolio.classList.remove('jump');
        btnPortfolio.classList.remove('bottom');
    }, 900);

};
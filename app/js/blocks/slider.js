var slider = function(){
    var
        arrPaginatorDots = [];

    arrPaginatorDots = document.querySelectorAll('.slider-paginator__item_dots');

    document.querySelector('.slide.active').classList.add('prev');
    document.querySelector('.slide.active').classList.remove('active');

    document.querySelector('.slide.next').classList.add('active');
    document.querySelector('.slide.next').classList.remove('next');

    arrPaginatorDots[0].classList.remove('active');
    arrPaginatorDots[1].classList.remove('full');
    arrPaginatorDots[1].classList.add('active');

    setTimeout(function () {
        document.querySelector('.slide.prev').classList.add('next');
        document.querySelector('.slide.prev').classList.remove('prev');
    }, 1000);
};
$(function () {
    var
        form = document.querySelector('.form-slide'),
        btnContacts = document.querySelector('.contact__link'),
        inputPhone = document.querySelector('.form-slide__input_phone'),
        btnSubmitForm = document.querySelector('.form-slide__btn'),
        arrPaginatorDots = [];

    arrPaginatorDots = document.querySelectorAll('.slider-paginator__item_dots');

    document.querySelector('.container').style.height = window.innerHeight + 'px';

    // effectsAbout();
    // effectsHeader();

    inputPhone.addEventListener('keydown', validNumber);
    inputPhone.addEventListener('focus', validFocus());

    btnContacts.addEventListener('click', function(e){
        transitionSection(e);
    });

    form.addEventListener('keydown', function () {

        var
            inputValid = validEmpty();

        if (inputValid === 2) {
            btnSubmitForm.classList.remove('disable');
            arrPaginatorDots[1].classList.add('full');
        }

        if (inputValid !== 2) {
            btnSubmitForm.classList.add('disable');
        }

    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var validNumberSub = validEmpty();

        if (validNumberSub !== 2) {
            return false;
        }

        slider();

        console.log('submit');
    });



});
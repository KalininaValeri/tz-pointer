var validNumber = function (event) {
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

var validFocus = function() {
    var
        inputPhone = document.querySelector('.form-slide__input_phone'),
        str = inputPhone.value;

    if (str.substring(0, 2) === '+7') {
        str = str.replace(str.substring(0, 2), '');
    }

    inputPhone.value = '+7' + str;
};

var validEmpty = function () {
    var
        inputName = document.querySelector('.form-slide__input_name'),
        validNumber = 0;

    if (inputName.value !== '') {
        validNumber = validNumber + 1;
    }

    if (inputPhone.value.length >= 11) {
        validNumber = validNumber + 1;
    }

    return validNumber;
};
$(function () {
    console.log(('main'));

    var containerAbout = document.querySelector('.about');
   
   var addNewIcon = function () {
       var div = document.createElement('div');
       div.className = "about__icon about__icon_creative";
       containerAbout.appendChild(div);
   }

    setTimeout(addNewIcon, 1000*10.3);
   
   
});
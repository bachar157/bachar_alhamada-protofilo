'use strit'
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
function onEvent(event, selector,callback){
    return selector.addEventListener(event, callback)
}
$(window).scroll(function(){
    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }
});



$(document).ready(function () {
    $('a.scroll').on('click', function (event) {
      var hash = this.hash
  
      $('html, body').animate(
        { scrollTop: $(hash).offset().top - 90 },
        800,
        function () {}
      )
    });
  
    //if (checkVisible($('#statistics'))) {
      $('.circle')
        .circleProgress({
          startAngle: -Math.PI / 2,
          fill: '#0575e6'
        })
        .on('circle-animation-progress', function (event, progress, stepValue) {
          $(this)
            .find('span')
            .html(Math.round(stepValue * 100) + '%')
        })
   // }
  });
$(function () {
    $("#emailForm").validate();
 });

 new CircleProgress('.progress', {
	max: 100,
	value: 40,
	textFormat: 'percent',
});
document.addEventListener('DOMContentLoaded', function () {
  var arrow = document.getElementById('scroll-arrow');

  window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          arrow.classList.remove('hide');
      } else {
          arrow.classList.add('hide');
      }
  });

  arrow.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

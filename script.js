$(function() {
  var $anchors = $('.gila_temax_looping .looping_ad_wrap');

  (function loop_element(idx) {
    $anchors.removeClass('active').eq(idx).addClass('active');
    setTimeout(function () {
      loop_element((idx + 1) % $anchors.length);
    }, 3000); // Atur waktu sesuai keinginan dengan format (1000 = 1 detik)
  }(0));
});

$('.close_button').click(function(){
  $('.looping_ad_wrap.active').remove();
});
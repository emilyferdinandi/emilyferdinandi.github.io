
$('header').on('click',function () {
 $(this).slideUp(300);
)};



$('#party-time').on('click',function () {
  $('#boxes').removeClass('.boring');
  $('#row4 div').fadeOut('slow');
  $('#box').show('#snazzy');
  $('#box3').addClass('#fun');
  $('h2').slideUp('fast');
  $('#row3 div').addClass('.selected');

});

$('#box2 a').on('click',function() {
  $('footer').fadeIn('slow');

});

$('#reset').on('click;',function() {
  $('header').slideDown('fast');
  $('footer').fadeOut('fast');
  $('#row4').show('#row4 div');
  $('#boxes').addClass('#boring');
  $('body').remove('#snazzy');
  $('#box3 span').remove('#fun');
  $('#row3 div').remove('#selected');
  $('h2').slideDown('slow');
)};

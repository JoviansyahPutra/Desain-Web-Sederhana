// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');
   
    e.preventDefault();
   });
   
   
// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    

});



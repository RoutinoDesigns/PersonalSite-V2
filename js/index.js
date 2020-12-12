$(window).on("load",function(){
	$(".LoadingGif .Loading-Anim").fadeOut(1800, function() {
		$(".LoadingGif").fadeOut(1800);
	});

})
$( document ).ready(function() {
$('#slides').superslides({
    animation:"fade",
    animation_easing:"linear",
    
    play:4000
});
var typed = new Typed(".element", {
    
    strings: [
      'IT student.',
      'Web Designer.',
      'Event Manager.',
      'Social Media Manager.'
    ],
    typeSpeed: 60,
    startDelay: 1000,
    shuffle: false,
    loop:true,
    showCursor:false,

});
// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
});
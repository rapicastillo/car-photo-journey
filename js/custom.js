$('#flip-one').bind('click', function() {
    $('#flip-one .card').toggleClass('flipped');
});
$('#flip-two').bind('click', function() {
    $('#flip-two .card').toggleClass('flipped');
});
$('#flip-three').bind('click', function() {
    $('#flip-three .card').toggleClass('flipped');
});


$(".connect a[href^='http://']").attr("target","_blank");

$( '.voice-slideshow' ).cycle();

$(function() {
	var win;
	$(".back .circle, .speak-up-link").each(function(i, item) {

		
		$(this).bind("click", function() {
			if (win)
			{
				win.close();
			}

			show_text = $(this).find("p").text().replace(/#CARCrisis/g, '');

			var param = $.param({
				url: "http://ow.ly/wloDg",
				via: "unocha",
				hashtags: "CARCrisis",
				text: show_text
			});


			win = window.open("https://twitter.com/intent/tweet?" + param, "twitter", "height=300,width=600,modal=yes,alwaysRaised=yes");
			win.focus();
		})

		
		//$(this).appendTo($link);
	});
});
/*
var map = L.mapbox.map('map', 'reliefweb.66vzehfr', {
    //zoomControl: false
})
    .setView([6.5, 20.6167], 7);

map.scrollWheelZoom.disable();
map.dragging.disable();
*/
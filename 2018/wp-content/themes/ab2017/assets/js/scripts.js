jQuery(document).ready(function($){

	//showGoogleMaps();

	$('#submit').on('click', function () {

		var $form = $('#formEmail');

		$.ajax({
			type: 'POST',
			datatype: 'json',
			url: $form[0].action,
			data: $form.serialize(),
			success: function (response, status) {
				var messageContainer = $('#formMessage');
				var _obj = { "status": "error", "message": "Não foi possível enviar seus dados. Tente novamente mais tarde." };
				var jsonResponse = JSON.parse(response) || _obj;

				if (jsonResponse.status === 'error') {
					messageContainer
						.text(jsonResponse.message)
						.removeClass('success')
						.addClass('error')
						.css('display', 'block');
					return false;
				}

				messageContainer
					.text('Mensagem enviada com sucesso!')
					.removeClass('error')
					.addClass('success')
					.css('display', 'block');
			},
			error: function (xhr, status) {
				var messageContainer = $('#formMessage');

				messageContainer
					.text('Não foi possível enviar seus dados. Tente novamente mais tarde.')
					.removeClass('success')
					.addClass('error')
					.css('display', 'block');
			}
		});
	});

	function showGoogleMaps() {
	  var position = [-1.4217252, -48.456777];
	    var latLng = new google.maps.LatLng(position[0], position[1]);

	    var mapOptions = {
	        zoom: 16, // initialize zoom level - the max value is 21
	        streetViewControl: false, // hide the yellow Street View pegman
	        scaleControl: false, // allow users to zoom the Google Map
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        center: latLng,
	        scrollwheel: false
	    };

	    map = new google.maps.Map(document.getElementById('location-gmaps'),
	        mapOptions);

	    // Show the default red marker at the location
	    marker = new google.maps.Marker({
	        position: latLng,
	        map: map,
	        draggable: false,
	        animation: google.maps.Animation.DROP
	    });
	}
	google.maps.event.addDomListener(window, 'load', showGoogleMaps);

});

/*
     FILE ARCHIVED ON 09:03:15 Mar 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:32:29 Feb 11, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 284.81 (3)
  esindex: 0.008
  captures_list: 429.368
  CDXLines.iter: 10.593 (3)
  PetaboxLoader3.datanode: 313.621 (4)
  exclusion.robots: 84.773
  xauthn.chkprivs: 0.097
  exclusion.robots.policy: 84.748
  RedisCDXSource: 46.243
  PetaboxLoader3.resolve: 25.682
  xauthn.identify: 84.352
  load_resource: 56.565
*/
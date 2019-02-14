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

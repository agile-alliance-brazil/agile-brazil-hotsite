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

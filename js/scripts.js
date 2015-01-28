$(document).ready(function(){

  $('#submit').on('click', function() {

    var $form = $('#formEmail');

    $.ajax({
      crossDomain: true,
      datatype: 'jsonp',
      type: 'POST',
      url: 'add_subscriber.php',
      data: $form.serialize(),
      success: function( response, status ) {
        var _obj = { "status": "error", "message": "Não foi possível enviar seus dados. Tente novamente mais tarde." };
        var jsonResponse = JSON.parse(response) || _obj;

        if ( jsonResponse.status === 'error' ) {
          $('.success', $form).addClass('hide');
          $('.error', $form).removeClass('hide').text(jsonResponse.message);
          return false;
        }

        $('.error', $form).addClass('hide');
        $('.success', $form).removeClass('hide');
      },
      error: function( xhr, status ) {
        $('.error', $form).removeClass('hide');
      }
    });
  });
});

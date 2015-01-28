$(document).ready(function(){

  $('#submit').on('click', function() {

    var $form = $('#formEmail');

    $.ajax({
      crossDomain: true,
      datatype: 'jsonp',
      type: 'POST',
      url: 'http://2014.staging.agilebrazil.com/add_subscriber.php',
      data: $form.serialize(),
      success: function( response, status ) {
        var jsonResponse = JSON.parse(response) || { "status": "error" };

        if ( jsonResponse.status === 'error' ) {
          $('.success', $form).addClass('hide');
          $('.error', $form).removeClass('hide');
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

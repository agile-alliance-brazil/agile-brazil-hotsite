$(document).ready(function(){
    $('#submit').on('click', function() {
        $.ajax({
            crossDomain: true,
            datatype: 'jsonp',
            type: 'post',
            url: 'add_subscriber.php',
            data: $('#formEmail').serialize(),
            success: function(responseData) {
                debugger;
            },  
            error: function(responseData) {
                debugger;
            }
        });
    });
});

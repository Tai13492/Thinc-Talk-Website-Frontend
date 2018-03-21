$(document).ready(function(){
    $('form').submit(function(e) {
        //This function prevents the page from reloading.
        e.preventDefault();
    });
    $('#buttonLogin').click( () => {
        //The function is quite similar to firstStart.js but the request is POST.
        //The response from the server is boolean.
    });
});


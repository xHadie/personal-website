$(document).ready(function() {
    $('#show-interest-music').click (function () {
        $('#bg-music').fadeIn('slow')
        $('#bg-electro').fadeOut('slow')

        $('#interest-music').fadeIn('slow')

        $('#interest-electro').fadeOut('slow')

    });
    $('#show-interest-electro').click (function () {
        $('#bg-electro').fadeIn('slow')
        $('#bg-music').fadeOut('slow')

        $('#interest-electro').fadeIn('slow')
        $('#interest-music').fadeOut('slow')

    });
});
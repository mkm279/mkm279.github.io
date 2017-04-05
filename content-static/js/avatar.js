var Avatar = function() {
    var proto = Avatar.prototype;
    var self = this;

    proto.init = function() {
        $(document).ready(function() {
            $('.header').fadeIn(500);
            $('.characters').fadeIn(1000);
            $('.btn-character').fadeIn(1500);
            handleSelectionClick();
            handleBackClick();
        });
    };

    var handleSelectionClick = function () {  
        $('.btn-character').click(function() {
            if($('input[name=yoda]').is(':checked')) {
                var id = $('input[name=yoda]:checked').val();
                var id = "character-" + id;
                $('#character-selection-board').slideUp('slow');
                $('#'+id).fadeIn('slow');
                $('.character-info-box').addClass('rotate');
                $.getJSON("../jedi.json", function(data) {
                    $('#'+id).find('.character-info-card h2').text(data[$('input[name=yoda]:checked').val()].name);
                    $('#'+id).find('.character-info-card p').text(data[$('input[name=yoda]:checked').val()].about);
                });
            }
            else {
                $('.ct').fadeOut();
                $('.ct').addClass('error-text');
                $('.ct').fadeIn();
            }
        })
    };

    var handleBackClick = function () {
        $('.back-button').click(function() {
            $('.ct').removeClass('error-text');
            $('input[name=yoda]:checked').removeAttr('checked');
            $(this).parents('.character-display').hide();
            $('#character-selection-board').slideDown('slow');
        })
    }

    var handleHashChange = function () {

    };
};
var AVATAR= new Avatar();
AVATAR.init();
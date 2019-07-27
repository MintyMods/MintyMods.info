/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Mobile?
    if (browser.mobile)
        $body.addClass('is-mobile');
    else {

        breakpoints.on('>medium', function () {
            $body.removeClass('is-mobile');
        });

        breakpoints.on('<=medium', function () {
            $body.addClass('is-mobile');
        });

    }

    // Scrolly.
    $('.scrolly')
        .scrolly({
            speed: 1500
        });

})(jQuery);

function  validateForm($form) {
    
}


(function () {
    var showContactDialog = document.getElementById('contactDetails');
    var contactDialog = document.getElementById('contactDialog');
    var confirmBtn = document.getElementById('confirmBtn');

    // “Update details” button opens the <dialog> modally
    showContactDialog.addEventListener('click', function onOpen() {
        if (typeof contactDialog.showModal === "function") {
            contactDialog.showModal();
        } else {
            alert("The dialog API is not supported by this browser");
        }
    });
    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    contactDialog.addEventListener('close', function onClose() {
        console.log(contactDialog.returnValue + " button clicked - " + (new Date()).toString());
        if (contactDialog.returnValue === 'default') {
            $("#contactForm").submit(function (e) {
                //e.preventDefault();
                var $form = $(this);
                if (validateForm($form)) {
                    $.post($form.attr("action"), $form.serialize()).then(function () {
                        alert("Your message has been sent. Thank you!");
                    });
                }
            });
        }
    });
})();

/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


function initMintyModsInfo() {
    PNotify.defaults.styling = 'material';
    PNotify.defaults.icons = 'fontawesome5'; // Font Awesome 5
    makeGitHubRibbenTooltip();

}
$("#download").click(function () {
    PNotify.notice({
        text: "Currently unavailable for download. See below for a demo of the current prototype.",
        shadow: true,
        icon: 'fal fa-info-circle fa-2x'
    });
});


function makeGitHubRibbenTooltip() {
    var corner = $('.github-corner');

    corner.tooltip = PNotify.notice({
        title: 'Fork MSS on GitHub',
        text: "This project is open source and hosted on GitHub.",
        hide: false,
        animateSpeed: 'fast',
        icon: 'fab fa-github',
        // Setting stack to false causes PNotify to ignore this notice when positioning.
        // It also causes the History module to ignore it.
        stack: false,
        autoDisplay: true,
        destroy: false,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        }
    });
    // Close the notice if the user mouses over it.
    corner.tooltip.on('mouseout', function () {
        window.tooltip.close();
    });
    corner.tooltip.on('mouseover', function () {
        window.tooltip.open();
    });
    corner.tooltip.on('mousemove', function () {
        corner.tooltip.refs.elem.style.top = (event.clientY + 12) + 'px';
        corner.tooltip.refs.elem.style.left = (event.clientX + 12) + 'px';
    });
    corner.tooltip.on('mouseout', function () {
        corner.tooltip.close();
    });
}




// Tooltip Handling
$(document).ready(function () {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light',
        animation: 'fade',
        delay: 200
    });
});

// Main Page / Content Handling
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


// Contact Form Handling
(function () {
    var contactDialog = document.getElementById('contactDialog');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');

    $('#contactDetails').on('click', function onOpen() {
        if (typeof contactDialog.showModal === "function") {
            contactDialog.showModal();
        } else {
            alert("The dialog API is not supported by this browser");
        }
    });

    $('#cancelBtn').on('click', function onClose() {
        $('#contactForm').trigger("reset");
        contactDialog.close();
    });

    $('#confirmBtn').one('click', function onClose() {
        $("#contactForm").submit(function (e) {
            e.preventDefault();
            var $form = $(this);
            $.post($form.attr("action"), $form.serialize()).then(function () {
                $('#contactForm').trigger("reset");
                alert("Your message has been sent. Thank you!");
                contactDialog.close();
            });

        });
    });
})();

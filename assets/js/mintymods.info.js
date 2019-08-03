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
    var notice = PNotify.notice({
        title: 'Project Status :     ALPHA',
        text: 'Currently unavailable for download - Feel free to try out the latest online prototype by clicking here or via the demo link at the bottom of the page',
        icon: 'fad fa-laptop-code fa-2x',
        addClass: 'minty-notification ',
        shadow: true
    });
    notice.refs.elem.style.cursor = 'pointer';
    notice.on('click', function (e) {
        if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
            return;
        }
        notice.update({
            type: 'info',
            text: '<ul class="actions special"><li><a href="demo/demo.html" title="Very early prototype of the application" class="tooltip button primary icon fa-lightbulb-on">View Online Demo</a></li></ul>',
            addClass: 'minty-notification ',
            textTrusted: true,
            shadow: true
        });
    });
});


/* Demo Notifications */
$("#minty-notice").click(function () {
    PNotify.success({
        title: "This is a Simple Notice",
        text: "Alerts can be configured for different levels e.g. Notice, Information, Warning, Critical, Fatal",
        shadow: true,
        addClass: 'minty-notification ',
        icon: 'fad fa-comments-alt fa-2x'
    });
});

$("#minty-info").click(function () {
    PNotify.info({
        title: "S.M.A.R.T.: Samsung SSD 960 EVO 250GB (S3ESNX0J518212P)",
        text: "Drive Remaining Life [ 49.9543% ] is below your INFO limit of [ 50% ]",
        shadow: true,
        addClass: 'minty-notification ',
        icon: 'fad fa-heart-rate fa-2x'
    });
});

$("#minty-warn").click(function () {
    PNotify.notice({
        title: "CPU [#0]: Intel Core i7-7700K: DTS",
        text: "Core #0 Thermal Throttling [ true ] has reached your WARN range of [ true ]",
        shadow: true,
        addClass: 'minty-notification ',
        icon: 'fad fa-temperature-hot fa-2x'
    });
});

$("#minty-critical").click(function () {
    PNotify.error({
        title: "GPU [#0]: NVIDIA GeForce RTX 2080 Ti:",
        text: "GPU Fan0 [ 237 rpm ] is below your CRITICAL range of [ 250 rpm ]",
        shadow: true,
        addClass: 'minty-notification ',
        icon: 'fad fa-fan fa-2x'
    });
});

$("#minty-fatal").click(function () {
    if (typeof window.stackBarTop === 'undefined') {
        window.stackBarTop = {
            'dir1': 'down',
            'firstpos1': 0,
            'spacing1': 0,
            'push': 'top'
        };
    }
    var opts = {
        title: 'GIGABYTE Z270X-Gaming 7 (ITE IT8686E)',
        text: "HPWR Pump [ 132 rpm ] is below your FATAL limit of [ 600 rpm ]",
        addClass: 'stack-bar-top',
        type: 'error',
        cornerClass: 'ui-pnotify-sharp minty-notification ',
        shadow: true,
        width: '100vw',
        icon: 'fad fa-asterisk fa-2x',
        stack: window.stackBarTop
    };
    PNotify.alert(opts);
});
/* End Demo Notifications */

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

function getUnsupportedBrowserIcon() {
    // https://github.com/GoogleChrome/dialog-polyfill
    if (browser.name == "chrome") {
        return "fab fa-chrome fa-2x";
    } else if (browser.name == "mozilla") {
        return "fab fa-firefox fa-2x";
    } else if (browser.name == "edge") {
        return "fab fa-edge fa-2x";
    } else if (browser.name == "ie") {
        return "fab fa-internet-explorer fa-2x";
    } else if (browser.name == "opera") {
        return "fab fa-opera fa-2x";
    } else if (browser.name == "safari") {
        return "fab fa-safari fa-2x";
    } else {
        return "fas fa-exclamation-triangle fa-2x";
    }
}

// Contact Form Handling
(function () {
    var contactDialog = document.getElementById('contactDialog');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');

    $('#contactDetails').on('click', function onOpen() {
        if (typeof contactDialog.showModal === "function") {
            contactDialog.showModal();
        } else {
            PNotify.error({
                text: "The 'dialog' API is not supported by this browser - update your browser to a more secure modern browser",
                shadow: true,
                icon: getUnsupportedBrowserIcon()
            });
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
                PNotify.success({
                    text: "Your message has been sent. Thank You!",
                    shadow: true,
                    icon: 'fal fa-inbox-out'
                });
                contactDialog.close();
            });

        });
    });
})();

function calculateLogoSvgCss() {
    const id = 'minty-banner-svg';
    const fill_delay = 2;
    const stroke_delay = 0.1;
    const outline_delay = 0.5;
    const logo = $('#' + id + ' path');
    var css = "#minty-banner-svg { animation: fill " + fill_delay + "s ease forwards " + (logo.length * stroke_delay) + "s; }";
    for (let i = 0; i < logo.length; i++) {
        console.log("Letter " + (i + 1) + " is " + logo[i].getTotalLength());
        css += "#" + id + " path:nth-child(" + (i + 1) + ") {";
        css += " stroke-dasharray: " + logo[i].getTotalLength() + ";";
        css += " stroke-dashoffset: " + logo[i].getTotalLength() + ";";
        css += " animation: line-anim " + outline_delay + "s ease forwards " + (i * stroke_delay) + "s";
        if (i < 3) {
            css += ", fill-mss " + fill_delay + "s ease forwards " + (logo.length * stroke_delay) + "s";
        }
        css += "; }";
    }
    $('.content').html(css);
}

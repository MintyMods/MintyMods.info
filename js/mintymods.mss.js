var layout = 'packery';
var trigger = $('.mss-ui-burger-icon');
trigger.click(function () {
    burgerTime();
});

var toggle = $('#toggle-layout');
toggle.click(function () {
    if (layout == 'packery') {
        layout = 'masonry';
        toggle.text('Layout = Packery - Click for Masonry');
    } else {
        layout = 'packery';
        toggle.text('Layout = Masonry - Click for Packery');
    }
    initLayoutManager();
});
toggle.click();

var notification = $('#send-example-notification');
notification.click(function () {
    mss.popIn('CPU is overheating...');
});

function burgerTime() {
    trigger.toggleClass('is-open');
    trigger.toggleClass('is-closed');
}

function initSensorServer() {
    navigation = new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('mss-ui-menu-toggle'));
    initLayoutManager();
    initPNotify();
}

function initLayoutManager() {
    switch (layout) {
        case 'masonry':
            initMasonry();
            break;
        case 'packery':
            initPackery();
            break;
    }

}

function initPackery() {
    $('.demo-grid').packery({
        // options
        itemSelector: '.grid-item',
        gutter: 10
    });
}

function initMasonry() {
    $('.demo-grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 400
    });

}

function initPNotify() {
    try {
        PNotify.defaults.icons = 'fontawesome5';
        PNotify.defaults.styling = 'bootstrap4'; // Bootstrap version 4
        PNotify.defaults.styling = 'material';
        PNotify.modules.History.defaults.maxInStack = 50;
        PNotify.defaults.width = '400px';
        PNotify.defaults = {
            titleTrusted: true,
            textTrusted: true,
            autoDisplay: true,
            shadow: true,
            delay: 8000
        }
        PNotify.defaultStack = {
            dir1: 'down',
            dir2: 'left',
            firstpos1: 25,
            firstpos2: 25,
            spacing1: 36,
            spacing2: 36,
            push: 'bottom',
            context: document.body
        }

    } catch (e) {
        console.log(e);
    }

}



var mss = new function () {

    var sendNotification = function (msg) { // var PRIVATE 
        var wrapper = {
            text: msg.text ? msg.text : 'Pop In Notification Type',
            title: msg.title ? msg.title : 'Notification shown within the Browser',
            type: msg.type ? msg.type : 'error',
            modules: {
                Desktop: {
                    desktop: msg.desktop ? msg.desktop : true
                }
            }
        };
        switch (wrapper.type) {
            case 'notice':
                PNotify.notice({
                    title: 'Custom Styling',
                    text: 'I have an additional class that\'s used to give me special styling. I always wanted to be pretty. I also use NonBlock.js.',
                    styling: {},
                    addClass: 'custom nonblock',
                    icon: 'far fa-file-image fa-3x'
                });
                break;
            case 'info':
                PNotify.info(wrapper);
                break;
            case 'success':
                PNotify.success(wrapper);
                break;
            case 'warning':
                PNotify.notice(wrapper);
                break;
            case 'error':
                PNotify.error(wrapper);
                break;
            default:
                PNotify.notice(wrapper);
        }
    };

    this.popIn = function (msg) { // this.PUBLIC
        var wrapper = {
            text: msg.text ? msg.text : 'Pop In Notification Type',
            title: msg.title ? msg.title : 'Notification shown within the Browser',
            type: msg.type ? msg.type : 'error',
            modules: {
                Desktop: {
                    desktop: false
                }
            }

        };
        sendNotification(wrapper);
    };

    this.popOut = function (msg) { // this.PUBLIC
        //     	var wrapper = {
        //    			'text':msg.text?msg.text:'Pop Out Notification Type',
        //    			'title': msg.title?msg.title:'Notification shown outside the Browser', 
        //    			type:msg.type?msg.type:'error',
        //				modules: {
        //				    Desktop: {
        //				    	desktop:true
        //				    }
        //				  }
        //     	};
        //     	sendNotification(wrapper);

        /*
                PNotify.desktop.permission();
                (new PNotify({
                    title: 'Desktop Success',
                    text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular PNotify notice.',
                    type: 'success',
                    desktop: {
                        desktop: true
                    }
                })).get().click(function (e) {
                    if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
                    alert('Hey! You clicked the desktop notification!');
                });
        */

    };

    this.popHide = function () {
        PNotify.closeAll();
    };

    this.popTest = function () {
        this.popIn(getDebugMsg());
    };

    this.popSpam = function () {
        PNotify.modules.History.showAll();
    };

    //    document.addEventListener('DOMContentLoaded', function () {
    //        if (Notification.permission !== "granted")
    //            Notification.requestPermission();
    //    });


    window.notifyMe = function () {
        if (!Notification) {
            //alert('Desktop notifications not available in your browser. Try Chromium.'); 
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('Notification');

            notification.onclick = function () {
                window.focus();
            };

            setTimeout(function () {
                notification.close()
            }, 2000);
        }
    }

    this.popAuth = function () {
        try {
            PNotify.modules.Desktop.permission();
        } catch (e) {
            console.log("Auth Problem");
        }
    };

};

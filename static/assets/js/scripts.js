/*

Theme Scripts
Theme: Higgs

*/

jQuery(function($){

    // ON LOAD

    $(window).load(function() {

        // Devices Fix

        var devices = !!navigator.platform && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform);

        var animateClasses = 'bounce flash pulse rubberBand shake headShake swing tada wobble ' +
            'jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown' +
            ' bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig' +
            ' fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft' +
            ' fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY' +
            ' lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight' +
            ' rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut' +
            ' zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp' +
            ' slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp';

        if ( devices == true ) {

            // Fix Appear

            $('*').data('wow-delay', 0);

            // Remove Animation

            $('.pb-caption div').removeClass('pb-animate' + animateClasses);

            // Fix Background 

            $('*').removeClass('pb-bg-attach-f').addClass('pb-bg-attach-s');

            // Fix Counts

            $('.pb-count').each(function(){

                var valueEnd = $(this).data('to');
                $(this).html(valueEnd);

            });

            // Fix Overlay

            $('.pb-portfolio .pb-item, .pb-blog .pb-image').on('click', function(){

                $('.pb-overlay', this).toggle('opacity', 1);

            });

            // Fix Bars

            $('.pb-bar').each(function(){

                var value = $(this).data('value');

                $('.pb-bar-value', this).css('width', value + '%');

            });

        }

        // Scroll To

        $('*[data-scroll]').on('click', function () {

            var dest = $(this).data('scroll');

            if ( $('header').hasClass('pb-header-onep') ) {

                $('html, body').animate({

                    scrollTop: $(dest).offset().top - 60

                }, 1000, 'easeOutQuint');

            } else {

                $('html, body').animate({

                    scrollTop: $(dest).offset().top - 30

                }, 1000, 'easeOutQuint');

            }

        });

        // Masonry Grid

        $('.pb-grid').each(function () {

            var $container = $(this);

            $container.isotope({

                itemSelector: '.pb-item',
                layoutMode: 'masonry',
                masonry: {columnWidth: '.pb-item'}

            });

        });

        // Filter Grid 

        $('.pb-filter-list li a').on('click', function () {

            $('.pb-item').removeClass('pb-animate');

            var selector = $(this).attr('data-filter');

            $('.pb-grid').isotope({filter: selector});

            return false;

        });

        // Sliders
        
        // Fade 

        $('.pb-slider-fade').slick({

            pauseOnHover: false,
            infinite: true,
            dots: false,
            autoplay: true,
            fade: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

        });
        
        // Slide Horizontal 

        $('.pb-slider-slide').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            autoplay: true,
            fade: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

        });
        
        // Slide Vertical 

        $('.pb-slider-vert').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            autoplay: true,
            fade: false,
            vertical: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

        });

        // Carousel

        $('.pb-carousel .pb-carousel-3, .pb-carousel .pb-carousel-5').slick({

            infinite: true,
            dots: true,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],

            arrows: false,

        });

        // Carousel Team

        $('.pb-team-1 .pb-slider, .pb-team-2 .pb-slider').slick({

            infinite: true,
            pauseOnHover: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],

            nextArrow: '<div class="pb-nav-btn pb-nav-next pb-color"><i class="pb-icon-chevron-thin-right"></i></div>',
            prevArrow: '<div class="pb-nav-btn pb-nav-prev pb-color"><i class="pb-icon-chevron-thin-left"></i></div>',

        });

        // Carousel Features

        $('.pb-features .pb-slider').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],

            arrows: false,

        });

        // Slider Quote

        $('.pb-quote .pb-slider').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: 'false',
            arrows: false,

        });

        // Slider Team

        $('.pb-team-3 .pb-slider').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: 'false',
            arrows: false,

        });

        // Slider Clients

        $('.pb-clients-2 .pb-slider').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],

            arrows: false,

        });

        $('.pb-clients-3 .pb-slider').slick({

            pauseOnHover: false,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],

            arrows: false,

        });

        // Countdown

        $('.pb-clock-1').countdown('2018/10/10', function (event) {

            var $this = $(this).html(event.strftime(''

                + '%w <span class="pb-font-xs pb-font-tiny">weeks</span> '
                + '%d <span class="pb-font-xs pb-font-tiny">days</span> '
                + '%H <span class="pb-font-xs pb-font-tiny">hours</span> '
                + '%M <span class="pb-font-xs pb-font-tiny">min</span> '
                + '%S <span class="pb-font-xs pb-font-tiny">sec</span>'
            ));

        });

        $('.pb-clock-2').countdown('2018/10/10', function (event) {

            var $this = $(this).html(event.strftime(''

                + '%w <span class="pb-font-xs pb-font-tiny">weeks</span> '
                + '%d <span class="pb-font-xs pb-font-tiny">days</span> '
                + '%H <span class="pb-font-xs pb-font-tiny">:</span> '
                + '%M <span class="pb-font-xs pb-font-tiny">:</span> '
                + '%S '
            ));

        });

        // Resize on Load

        $(window).trigger('resize');

    });

    // ON READY

    $(document).ready(function(){

        // Appear

        wow = new WOW(
            {
                boxClass:     'pb-animate',
                animateClass: 'pb-animate',
                offset:       0,
                mobile:       false,
                live:         true,
                callback:     function() {

                    setTimeout(function(){

                        // Bars 

                        $('.pb-bar').each(function () {

                            var value = $(this).data('value');

                            $('.pb-bar-value', this).animate({width: value + '%'}, 3000, 'easeInQuint');

                        });

                    }, 2000);

                    setTimeout(function(){

                        // Counters 

                        $('.pb-count').each(function () {

                            var to = $(this).data('to');
                            var speed = $(this).data('speed');

                            $(this).animate({ value: to }, {

                                duration: speed,
                                easing: 'linear',
                                easing: 'linear',
                                step: function() {

                                    $(this).text( Math.ceil( this.value ) );

                                }

                            });

                        });

                    }, 5000);

                }
            }
        )

        wow.init();

        // Sub Main Menu

        $('.pb-main-menu .pb-main-list li').hover(function () {

            $('> .pb-sub-list', this).addClass('pb-animate-2');

            $('> .pb-sub-list', this).stop(true, true).css({'visibility': 'visible', 'opacity': 1, 'padding-left': 0});

        }, function () {

            $('> .pb-sub-list', this).stop(true, true).css({'visibility': '', 'opacity': '', 'padding-left': ''});

        });

        // Mobile Menu

        $('.pb-btn-menu').on('click', function () {

            var menuWrap = $('.pb-mobile-menu');
            var menuContent = $('.pb-mobile-menu .pb-menu');

            if (menuContent.hasClass('slideInUp')) {

                $('i', this).removeClass('pb-icon-cross').addClass('pb-icon-menu');

                menuContent.removeClass('slideInUp');
                menuContent.addClass('slideOutDown');

                setTimeout(function () {

                    menuWrap.slideUp();

                }, 500);

            } else {

                $('i', this).removeClass('pb-icon-menu').addClass('pb-icon-cross');

                if (menuContent.hasClass('slideOutDown')) {

                    menuContent.removeClass('slideOutDown');

                }

                menuContent.addClass('slideInUp pb-animate');
                menuWrap.slideDown();

            }

        });

        // Sub Mobile Menu

        var itemBtn = $('.pb-mobile-menu .pb-main-list .pb-main-item').not('.pb-sub-list .pb-main-item');

        itemBtn.append('<div class="pb-btn-sub-down"></div>');

        var itemParent = $('.pb-btn-sub-down').parent();

        itemParent.on('click', function () {

            if ($(this).hasClass('pb-over-v')) {

                var thisItem = $(this)

                $('.pb-sub-list', this).slideUp();

                $('.pb-btn-sub-down', this).removeClass('pb-btn-sub-up');

                setTimeout(function () {

                    thisItem.removeClass('pb-over-v').css('height', '60px');

                }, 500);

            } else {

                $(this).addClass('pb-over-v').css('height', 'auto');

                $('.pb-sub-list', this).slideDown();
                $('.pb-btn-sub-down', this).addClass('pb-btn-sub-up');

            }

        });

        // Refresh on Top

        $(this).scrollTop(0);

        setTimeout(function(){

            $(this).scrollTop(0);

        }, 0);

        // Loader

        $('#pb-mask .pb-circle, #pb-mask .pb-spin').css({'opacity': 1, 'visibility': 'visible'});

        setTimeout(function(){

            $('#pb-mask .pb-circle').addClass('rotateBackForth');
            $('#pb-mask .pb-spin').addClass('rotateForthBack');

        }, 300);

        setTimeout(function(){

            $('#pb-mask').fadeOut();

            $('.pb-hero .pb-slider').slick({

                pauseOnHover: false,
                infinite: true,
                dots: false,
                autoplay: true,
                fade: true,
                autoplaySpeed: 4000,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<div class="pb-nav-btn pb-nav-next pb-color-white pb-animate bounceIn"><i class="pb-icon-chevron-thin-right"></i></div>',
                prevArrow: '<div class="pb-nav-btn pb-nav-prev pb-color-white pb-animate bounceIn"><i class="pb-icon-chevron-thin-left"></i></div>',

            });

        }, 2000);

        // Toggle Link

        $('.pb-btn-link').on('click', function(){

            $('.pb-link').slideDown();

        });

        $('.pb-link .pb-btn-close').on('click', function(){

            $('.pb-link').slideUp();

        });

        // Toggle Search

        $('.pb-btn-search').on('click', function(){

            $('.pb-search').slideDown();

        });

        $('.pb-search .pb-btn-close').on('click', function(){

            $('.pb-search').slideUp();

        });

        // Tabs

        $( '.pb-tabs-vert, .pb-tabs-hor' ).tabs();

        // Accordion

        $( '.pb-accordion' ).accordion();

        // Resize on Ready

        $(window).trigger('resize');

        // Popup Images

        $('.pb-popup').magnificPopup({

            type: 'image',
            gallery: {
                enabled: true
            },

        });

    });

    // ON SCROLL

    $(window).scroll(function () {

        var position = $(this).scrollTop() + 30;
        var winWidth = $(this).width();

        // Header OnePage

        if ( position <= 30 && ( $('header.pb-header-onep').hasClass('pb-header-sticky') ) ) {

            $('header').removeClass('pb-header-sticky');

            if ( winWidth >= 1200 ) {

                $('header.pb-header-onep .pb-logo img').attr('src', 'assets/img/logo-white.png');

            }

        } else {

            $('header.pb-header-onep').addClass('pb-header-sticky');
            $('header.pb-header-onep .pb-main-menu').addClass('pb-animate-3');
            $('header.pb-header-onep .pb-logo').addClass('pb-animate-3');

            if ( winWidth >= 1200 ) {

                $('header.pb-header-onep .pb-logo img').attr('src', 'assets/img/logo-black.png');

            }

        }

    });

    // ON RESIZE

    $(window).resize(function() {

        // Resize Canvas

        var winWidth = $(this).width();
        var winHeight = $(this).height();

        $('.pb-canvas').css({'width': winWidth, 'height': winHeight });

        // Masonry Fix

        $('.pb-item').removeClass('pb-animate');

        // Fix Sub Menu

        if( winWidth >= 1200 ){

            var thisItem = $('.pb-mobile-menu .pb-menu');

            if( thisItem.hasClass('slideInUp') ) {

                thisItem.removeClass('slideInUp').addClass('slideOutDown');

                $('.pb-mobile-menu').css('display','none');

                $('.pb-btn-menu i').removeClass('pb-icon-cross').addClass('pb-icon-menu');

            }

        }

    });

});
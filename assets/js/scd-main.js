$(document).ready(function () {

    /**
     * ---------------------
     *   Header
     * ---------------------
     */
    // +------ # Links Bar 
    $('.navigation-bar .links-bar .main-links .nav-item.has-sub').hover(function () {
        var subMenu = $(this).data("sub");
        var itemShift = $(this).offset().left + parseInt($(this).css('padding-left')) - parseInt($('.navigation-bar .links-bar .container').css('margin-left')) - parseInt($('.navigation-bar .links-bar .container').css('padding-left'));

        // Add/Remove active class
        if ($(this).hasClass('active')) {
            isHovered = ($('.navigation-bar .links-bar .sub-menu:hover').length > 0) ? true : false;

            if (!isHovered) {
                $(this).removeClass('active');

                // Change caret direction
                $(this).find('i').addClass('fa-caret-down').removeClass('fa-caret-up');

                // Toggle the sub menu
                $(`.navigation-bar .links-bar .sub-menu.${subMenu}`).hide();
            } else {
                $('.navigation-bar .links-bar .sub-menu').hover(function (e) {
                    $(this).show();
                }, function () {
                    $('.navigation-bar .links-bar .main-links .nav-item.has-sub').removeClass('active');

                    // Toggle the sub menu
                    $(this).hide();

                    // Change caret direction
                    $('.navigation-bar .links-bar .main-links .nav-item.has-sub').find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
                });
            }
        } else {
            $(this).addClass('active').siblings().removeClass('active');

            // Change caret direction
            $(this).find('i').addClass('fa-caret-up').removeClass('fa-caret-down').parent().siblings().find('i').addClass('fa-caret-down').removeClass('fa-caret-up');

            // Toggle the sub menu
            $(`.navigation-bar .links-bar .sub-menu.${subMenu} .sub-items`).css(`padding-left`, `${itemShift}px`);
            $(`.navigation-bar .links-bar .sub-menu.${subMenu}`).show().siblings('.sub-menu').hide();
        }
    });

    $('.navigation-bar .links-bar .main-links .nav-item.has-sub').click(function () {
        return false;
    });

    // +------ # Tools Bar 
    // Share Button
    $('.share img').hover(function () {
        $(this).parent().find('.label').fadeIn(200).css('display', 'inline-flex');
    });

    $('.share .label').hover(function () {
        isHovered = ($('.share .label:hover').length > 0) ? true : false;

        if (!isHovered) {
            $(this).fadeOut(200);
        }
    });

    $('.share .label').click(function () {
        $(this).parent().find('.share-icons').fadeIn(200).css('display', 'inline-flex');
    });

    $('.share span').click(function () {
        $(this).parent().find('.share-icons').fadeIn(200).css('display', 'inline-flex');
    });

    $('.close-pop').click(function () {
        $(this).parent().fadeOut(200);
    });

    // Language Dropdown Menu
    $('.tools-bar .tools .tool.lang > .t-btn').click(function () {
        $(this).siblings('.lang-menu').slideDown(300);
    });

    $('.tools-bar .tools .lang .lang-menu .t-btn').click(function () {
        $(this).parent().slideUp(300);
    });

    $('.tools-bar .tools .lang .lang-menu').click(function (e) {
        e.stopPropagation();
    });

    $('.tools-bar .tools .tool.lang > .t-btn').click(function (e) {
        e.stopPropagation();
    });

    $(window).click(function () {
        $('.tools-bar .tools .lang .lang-menu').slideUp(300);
    });

    // Search Form
    $('.tools-bar .tools .tool.search').click(function () {
        $('.tools-bar .search-pop').fadeIn(200);
    });

    $('.tools-bar .search-pop .close-search-pop').click(function () {
        $(this).parent().fadeOut(200);
    });



    // Accessibility Settings
    $('.tools-bar .tools .tool.accessibilty').click(function (e) {
        $('.accessibility-settings').fadeIn(200);
        $('body').css('overflow', 'hidden');
        e.stopPropagation();
    });

    $('.accessibility-settings .window .close-window').click(function () {
        $(this).parents('.accessibility-settings').fadeOut(200);
        $('body').css('overflow', 'auto');
    });

    $(window).click(function () {
        $('.accessibility-settings').fadeOut(200);
        $('body').css('overflow', 'auto');
    });

    $('.accessibility-settings .window').click(function (e) {
        e.stopPropagation();
    });

    // Font Sizer
    var levels = ['Small', 'Medium', 'Large'];

    $('input[type="range"]').each(function (e) {
        var val = $(this).val();
        var min = $(this).attr('min');
        var max = $(this).attr('max');

        var currentPercentage = (val / (max - min)) * 100;
        $(this).siblings('output').css({
            'left': currentPercentage + '%',
            'transform': 'translateX(-' + currentPercentage + '%)'
        }).text(levels[val]);

        $(this).css({
            '--value': val,
            '--min': min == '' ? '0' : min,
            '--max': max == '' ? '2' : max
        });

        $(this).on('input', function () {
            var cur = $(this).val();

            var cp = (cur / (max - min)) * 100;
            $(this).siblings('output').css({
                'left': cp + '%',
                'transform': 'translateX(-' + cp + '%)'
            }).text(levels[cur]);

            $(this).css('--value', cur);
        });
    });

    // Color Changer
    $('.accessibility-settings .window .options-list .option .color-changer .color').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).html('<i class="fas fa-check"></i>').siblings().html('');
    });

    // Colors Inverter
    $('.accessibility-settings .window .options-list .option .switch span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Print Document
    $('.accessibility-settings .window .options-list .option .print-page .print-doc').click(function () {
        window.print();
    });

    // Reset
    $('.accessibility-settings .window .action-btns .ab.reset').click(function () {
        $('.accessibility-settings .window .options-list .option .color-changer .color.default').addClass('active').siblings().removeClass('active');
        $('.accessibility-settings .window .options-list .option .color-changer .color.default').html('<i class="fas fa-check"></i>').siblings().html('');

        $('.accessibility-settings .window .options-list .option .switch span.default').addClass('active').siblings().removeClass('active');

        $('input#font-sizer').each(function () {
            var def = $(this).data('default');
            var min = $(this).attr('min');
            var max = $(this).attr('max');

            var cp = (def / (max - min)) * 100;
            $(this).siblings('output').css({
                'left': cp + '%',
                'transform': 'translateX(-' + cp + '%)'
            }).text(levels[def]);

            console.log(def);

            $(this).css('--value', def.toString());
            $(this).val(def);
        });
    });

    // Happiness Meter
    $('.tools-bar .tools .tool.happiness').click(function (e) {
        $('.happiness-meter').fadeIn(200);
        $('body').css('overflow', 'hidden');
        e.stopPropagation();
    });

    $(window).click(function () {
        $('.happiness-meter').fadeOut(200);
        $('body').css('overflow', 'auto');
    });

    $('.happiness-meter .window').click(function (e) {
        e.stopPropagation();
    });

    $('.happiness-meter .window .range-meter #happiness-meter').on('input', function () {
        var cur = $(this).val();
        $('.happiness-meter .window .percentage').text(cur);
    });

    // Sticky Header
    $(window).scroll(function () {
        var sticky = $('.navigation-bar'),
            scroll = $(window).scrollTop();

        if (scroll >= 120) {
            sticky.addClass('fixed');
            $('body').css('padding-top', '116px');
        } else {
            sticky.removeClass('fixed');
            $('body').css('padding-top', '0');
        }
    });

    /**
     * ---------------------
     *   Footer
     * ---------------------
     */
    $(".goUp").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


    /**
     * ---------------------
     *   Home Page
     * ---------------------
     */
    //  Home Slider
    var homeSlider = $('.home-slider section').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    var numOfSlides = $('.home-slider .slick-slide:not(.slick-cloned)').length;
    $('.home-slider .controllers .count small').text(numOfSlides);

    $('.home-slider .controllers .next').click(function () {
        var i = parseInt($('.home-slider .slick-current:not(.slick-cloned)').next().data('slick-index'));
        $('.home-slider .controllers .count span').text((i < numOfSlides) ? i + 1 : i - (numOfSlides - 1));

        homeSlider.slick('slickNext');
        return false;
    });

    $('.home-slider .controllers .prev').click(function () {
        var i = parseInt($('.home-slider .slick-current:not(.slick-cloned)').prev().data('slick-index'));
        $('.home-slider .controllers .count span').text((i < 0) ? numOfSlides : i + 1);

        homeSlider.slick('slickPrev');
        return false;
    });

    function homeSliders(element, toShowAndScroll = 3) {
        var theSlider = $(element + ' section').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: toShowAndScroll,
            slidesToScroll: toShowAndScroll
        });

        $(element + ' .controllers .next').click(function () {
            theSlider.slick('slickNext');
            return false;
        });

        $(element + ' .prev').click(function () {
            theSlider.slick('slickPrev');
            return false;
        });
    }

    // On swipe event
    homeSlider.on('swipe', function (event, slick, direction) {
        if (direction == "right") {
            var i = parseInt($('.home-slider .slick-current:not(.slick-cloned)').data('slick-index'));
            $('.home-slider .controllers .count span').text((i < numOfSlides) ? i + 1 : i - (numOfSlides - 1));
        } else {
            var i = parseInt($('.home-slider .slick-current:not(.slick-cloned)').data('slick-index'));
            $('.home-slider .controllers .count span').text((i < 0) ? numOfSlides : i + 1);
        }
    });

    // Services Slider
    homeSliders('.slider-block.services', 4);

    // News Slider
    homeSliders('.slider-block.news');

    // Events Slider
    homeSliders('.slider-block.events');

    // Partners Slider
    homeSliders('.slider-block.partners', 4);

    // Download App
    $('.download-app .stores a').hover(function () {
        $(this).find('.scan-qr').fadeToggle(200);
    });

    /**
     * ---------------------
     *   Contact Page
     * ---------------------
     */
    $('.contact-bar .addresses .box nav a').click(function () {
        var menu = $(this).data('menu');
        $(this).addClass('active').siblings().removeClass('active');
        $(`.${menu}`).fadeIn(200).siblings('.menu').fadeOut(200);

        var firstLocation = $(`.${menu}`).find('.location').first().data('location-url');
        $(`.${menu}`).find('.location').first().addClass('active').siblings().removeClass('active');
        $('.contact-bar .addresses .map iframe').attr('src', firstLocation);

        return false;
    });

    $('.contact-bar .addresses .box .menu a').click(function () {
        var locationURL = $(this).data('location-url');
        $(this).addClass('active').siblings().removeClass('active');

        $('.contact-bar .addresses .map iframe').attr('src', locationURL);

        return false;
    });

    /**
     * ---------------------
     *   News
     * ---------------------
     */
    // Load More Button in News
    var itemsPerPage = parseInt($('.news.news-page').data('items-per-page'));
    var shownItems = parseInt($('.news.news-page').data('shown-items'));

    $(".news-page .block").slice(0, shownItems).show();
    $(".load-more").on('click', function (e) {
        e.preventDefault();
        $(".news-page .block:hidden").slice(0, itemsPerPage).slideDown();
        if ($(".news-page .block:hidden").length == 0) {
            $(".load-more").fadeOut('slow');
        }
        // $('html,body').animate({
        //   scrollTop: $(this).offset().top
        // }, 1500);
    });
    
    /**
     * ---------------------
     *   Events
     * ---------------------
     */
    // Load More Button in News
    var itemsPerPageEv = parseInt($('.events.events-page').data('items-per-page'));
    var shownItemsEv = parseInt($('.events.events-page').data('shown-items'));

    $(".events-page .block").slice(0, shownItemsEv).show();
    $(".load-more").on('click', function (e) {
        e.preventDefault();
        $(".events-page .block:hidden").slice(0, itemsPerPageEv).slideDown();
        if ($(".events-page .block:hidden").length == 0) {
            $(".load-more").fadeOut('slow');
        }
        // $('html,body').animate({
        //   scrollTop: $(this).offset().top
        // }, 1500);
    });

    /**
     * ---------------------
     *   Job Application
     * ---------------------
     */
    $('.default-form form .group input#cv').click(function(){
        $(this).siblings('input[type="file"]').click();
    });

    $('.default-form form .group button').click(function(){
        $(this).siblings('input[type="file"]').click();
    });

    $('.default-form form .group input[type="file"]').change(function(){
        var inputVal = $(this).val().split("\\");
        var filename = inputVal[inputVal.length - 1];
        $(this).siblings('input#cv').val(filename);

        if ($(this).val()) {
            $(this).siblings('label').addClass('file-selected');
        } else {
            $(this).siblings('label').removeClass('file-selected');
        }

        console.log(inputVal);
    });

    $('.submit-application').click(function (e) {
        $('.app-success').fadeIn(200);
        $('body').css('overflow', 'hidden');
        e.stopPropagation();
    });

    $('.app-success .window a').click(function () {
        $(this).parents('.app-success').fadeOut(200);
        $('body').css('overflow', 'auto');

        return false;
    });

    $(window).click(function () {
        $('.app-success').fadeOut(200);
        $('body').css('overflow', 'auto');
    });

    $('.app-success .window').click(function (e) {
        e.stopPropagation();
    });

    /**
     * ---------------------
     *   Services Page
     * ---------------------
     */
    var servicesTable = $('.services-table table').DataTable({
        "lengthChange": false,
        "info": false,
        "paging": true,
        "pageLength": 10,
        "pagingType": "simple_numbers"
    });

    $('.page-header .page-tools .search-for-services').on('submit', function (e) {
        e.preventDefault();
    });

    $('.page-header .page-tools .search-for-services input').on('keyup', function () {
        servicesTable.search(this.value).draw();
    });

    // var pages = Math.ceil((servicesTable.page.info().recordsTotal/servicesTable.page.len()));
    $('.services-table .pagination .count small').text(servicesTable.page.info().pages);

    $('.services-table .pagination .next').on('click', function () {
        servicesTable.page('next').draw('page');
        $('.services-table .pagination .count span').text(servicesTable.page.info().page + 1);
        return false;
    });

    $('.services-table .pagination .prev').on('click', function () {
        servicesTable.page('previous').draw('page');
        $('.services-table .pagination .count span').text(servicesTable.page.info().page + 1);
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 0);
        return false;
    });
});
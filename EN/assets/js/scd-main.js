$(document).ready(function () {

    /**
     * ---------------------
     *   Header
     * ---------------------
     */

    // +------ # Links Bar 

    // Mobile Version
    var heights = [];
    function getHeights() {
        $('.navigation-bar').css('left', '0%');
        $('body').css('overflow', 'hidden');

        $('.navigation-bar .links-bar .main-links .nav-item.has-sub').each(function () {
            var key = $(this).data("sub");

            heights[key] = {
                top: $(this).position().top + parseInt($(this).css('height')),
                height: parseInt($(`.navigation-bar .links-bar .sub-menu.${key}`).css('height'))
            };
        });

        return false;
    }

    $('.mobile-bar .open-navigation-menu').click(getHeights);
    $('.accessibility-settings input[type="range"]').on('input', getHeights);

    $('.mobile-bar .close-navigation-menu').click(function () {
        $('.navigation-bar').css('left', '-100%');
        $('body').css('overflow', 'auto');

        return false;
    });

    if ($(window).width() <= 992) {
        $('.navigation-bar').click(function (e) {
            e.stopPropagation();
        });
    }

    if ($(Window).width() >= 992) {
        $('.navigation-bar .links-bar .main-links .nav-item.has-sub').hover(function () {
            var subMenu = $(this).data("sub");
            var itemShift = $(this).offset().left + parseInt($(this).css('padding-left')) - parseInt($('.navigation-bar .links-bar .container').css('margin-left')) - parseInt($('.navigation-bar .links-bar .container').css('padding-left'));

            // Add/Remove active class
            if ($(this).hasClass('active')) {
                isHovered = ($('.navigation-bar .links-bar .sub-menu:hover').length > 0) ? true : false;

                if (!isHovered) {
                    $(this).removeClass('active');

                    $(this).css('margin-bottom', '0');

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

                        $('.navigation-bar .links-bar .main-links .nav-item.has-sub').css('margin-bottom', '0');

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
    } else {

        $('.navigation-bar .links-bar .main-links .nav-item.has-sub').click(function () {
            var subMenu = $(this).data("sub");
            var subMenuShift = $(this).position().top + parseInt($(this).css('height'));
            var subMenuHeight = parseInt($(`.navigation-bar .links-bar .sub-menu.${subMenu}`).css('height'));

            // Add/Remove active class
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');

                $(this).css('margin-bottom', '0');

                // Change caret direction
                $(this).find('i').addClass('fa-caret-down').removeClass('fa-caret-up');

                // Toggle the sub menu
                $(`.navigation-bar .links-bar .sub-menu.${subMenu}`).hide();
            } else {
                $(this).addClass('active').siblings().removeClass('active');

                // Change caret direction
                $(this).find('i').addClass('fa-caret-up').removeClass('fa-caret-down').parent().siblings().find('i').addClass('fa-caret-down').removeClass('fa-caret-up');

                // Toggle the sub menu
                $(`.navigation-bar .links-bar .sub-menu.${subMenu}`).css(`top`, `${heights[subMenu].top}px`);
                $(this).css('margin-bottom', heights[subMenu].height).siblings().css('margin-bottom', '0');

                $(`.navigation-bar .links-bar .sub-menu.${subMenu}`).show().siblings('.sub-menu').hide();
            }

            return false;
        });
    }

    // +------ # Tools Bar 
    // Share Button
    if ($(window).width() >= 992) {
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
    } else {
        $('.share img').click(function () {
            $(this).parent().find('.share-icons').fadeIn(200).css('display', 'inline-flex');
        });
    }

    $('.facebook-link').attr(`href`, `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
    $('.twitter-link').attr(`href`, `https://twitter.com/intent/tweet?text=${window.location.href}`);
    $('.linkedin-link').attr(`href`, `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`);

    $('.meta-bar .share span').click(function () {
        $(this).parent().find('.share-icons').fadeIn(200).css('display', 'inline-flex');
    });

    $('.close-pop').click(function () {
        $(this).parent().fadeOut(200);
    });

    // Language Dropdown Menu
    // $('.tools-bar .tools .tool.lang > .t-btn').click(function () {
    //     $(this).siblings('.lang-menu').slideDown(300);
    // });

    // $('.tools-bar .tools .lang .lang-menu .t-btn').click(function () {
    //     $(this).parent().slideUp(300);
    // });

    // $('.tools-bar .tools .lang .lang-menu').click(function (e) {
    //     e.stopPropagation();
    // });

    // $('.tools-bar .tools .tool.lang > .t-btn').click(function (e) {
    //     e.stopPropagation();
    // });

    // $(window).click(function () {
    //     $('.tools-bar .tools .lang .lang-menu').slideUp(300);
    // });

    // Search Form
    $('.tools-bar .tools .tool.search').click(function () {
        $('.tools-bar .search-pop').fadeIn(200);
    });

    $('.tools-bar .search-pop .close-search-pop').click(function () {
        $(this).parent().fadeOut(200);
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

    $('.happiness-meter .close-window').click(function () {
        $('.happiness-meter').fadeOut(200);
        return false;
    });

    // Sticky Header
    $(window).scroll(function () {
        var sticky = $('.navigation-bar'),
            stickyMobile = $('body > .mobile-bar'),
            scroll = $(window).scrollTop();

        if ($(window).width() >= 992) {
            if (scroll >= 120) {
                sticky.addClass('fixed');
                $('body').css('padding-top', '116px');
            } else {
                sticky.removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        } else {
            if (scroll >= 60) {
                stickyMobile.addClass('fixed');
                $('body').css('padding-top', '48px');
            } else {
                stickyMobile.removeClass('fixed');
                $('body').css('padding-top', '0');
            }
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

    function homeSliders(element, toShowAndScroll = 3, centerMode = true, toShowAndScrollMobile = 1, centerPadding = 0) {
        var theSlider = $(element + ' section').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: toShowAndScroll,
            slidesToScroll: toShowAndScroll,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: toShowAndScroll - 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        centerMode: centerMode,
                        centerPadding: centerPadding,
                        slidesToShow: toShowAndScrollMobile
                    }
                }
            ]
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
    homeSliders('.slider-block.services', 4, true, 1, '50px');

    // News Slider
    homeSliders('.slider-block.news');

    // Events Slider
    homeSliders('.slider-block.events');

    // Partners Slider
    homeSliders('.slider-block.partners', 4, true, 2);

    if ($(window).width() <= 992) {
        // On swipe event
        $('.slider-block.partners section').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (currentSlide !== 1) {
                $(this).parent().parent().removeClass('remove-transform');
            } else {
                $(this).parent().parent().addClass('remove-transform');
            }
        });
    }

    // Download App
    if ($(window).width() > 768) {
        $('.download-app .stores a').hover(function () {
            $(this).find('.scan-qr').fadeToggle(200);
        });
    }

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
    $('.default-form form .group input#cv').click(function () {
        $(this).siblings('input[type="file"]').click();
    });

    $('.default-form form .group button').click(function () {
        $(this).siblings('input[type="file"]').click();
    });

    $('.default-form form .group input[type="file"]').change(function () {
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
    if ($('.services-table table').length && $(window).width() >= 992) {
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
    }

    // For Mobile Version
    if ($(window).width() < 992) {
        function paginate(items, perPage = 10, currentPage = 1, offset = 0) {
            $(items).removeClass('visible');

            $(items).slice((offset + (perPage * currentPage) - perPage), currentPage * perPage).show().css('display', 'flex').addClass('visible');
            $(items + ":not('.visible')").hide();

            return currentPage;

        }

        function allPages(items, perPage = 10) {
            var getPages = Math.ceil($(items).length / perPage);
            return getPages;
        }

        $('.page-header .page-tools .search-for-services input').on('keyup', function () {
            $('.services-links.for-mobile a').removeClass('result');
            $('.services-links.for-mobile a:contains(' + this.value + ')').show().css('display', 'flex').addClass('result');

            $(".services-links.for-mobile a:not('.result')").hide();
        });

        // Items Per Page
        var itemsNum = 10;

        var getAllPages = allPages('.services-links.for-mobile a', itemsNum);
        var pageNow = paginate('.services-links.for-mobile a', itemsNum);

        $('.services-table .pagination .count small').text(allPages('.services-links.for-mobile a', itemsNum));

        $('.services-table .pagination .next').on('click', function () {
            if (pageNow < getAllPages) {
                pageNow = paginate('.services-links.for-mobile a', itemsNum, pageNow + 1);
                $('.services-table .pagination .count span').text(pageNow);
            }

            return false;
        });

        $('.services-table .pagination .prev').on('click', function () {
            if (pageNow > 1 && pageNow <= getAllPages) {
                pageNow = paginate('.services-links.for-mobile a', itemsNum, pageNow - 1);
                $('.services-table .pagination .count span').text(pageNow);
            }

            return false;
        });
    }

    /**
     * ---------------------
     *   Forms
     * ---------------------
     */
    $('.default-form form .group input, .default-form form .group textarea').keyup(function () {
        var val = $(this).val();
        var label = $(this).siblings('label');

        if (val) {
            label.addClass('typing');
        } else {
            label.removeClass('typing');
        }
    });

    $('.default-form form .group input, .default-form form .group textarea').focus(function () {
        var label = $(this).parent();
        var group = $(this).siblings('label');

        group.addClass('typing');
        label.addClass('typing');
    });

    $('.default-form form .group input, .default-form form .group textarea').blur(function () {
        var val = $(this).val();
        var label = $(this).parent();
        var group = $(this).siblings('label');

        if (val) {
            group.addClass('typing');
            label.addClass('typing');
        } else {
            group.removeClass('typing');
            label.removeClass('typing');
        }
    });

    $('.default-form form .group textarea[data-auto-height]').on('keyup keydown input focus blur', function (event) {
        var val = $(this).val();

        if (!val) {
            $(this).css('height', '46px');
        } else {
            $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
        }
    });

    /**
     * ---------------------
     *   General
     * ---------------------
     */
    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]).replace("?", "");
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    }

    var params = parse_query_string(location.search);

    $(`.${params.tab}`).find('button.collapsed').removeClass('collapsed');
    $(`.${params.tab}`).find('div.collapse').addClass('show');

    if (params.tab) {
        if ($(window).width() >= 992) {
            $("body, html").animate({
                scrollTop: $(`#${params.tab}`).offset().top - 116
            }, 200);
        } else {
            $("body, html").animate({
                scrollTop: $(`#${params.tab}`).offset().top - 48
            }, 200);
        }
    }

    // Copy Link
    $('.copy-link').click(function () {
        var theLink = window.location.href;

        navigator.clipboard.writeText(theLink).then(function () {
            $('.tools-bar .tools .tool.share .share-icons a .copied').fadeIn(200);

            setTimeout(() => {
                $('.tools-bar .tools .tool.share .share-icons a .copied').fadeOut(200);
            }, 1200);
        }, function () {
            alert('Failure to copy. Check permissions for clipboard')
        });

        return false;
    });

});
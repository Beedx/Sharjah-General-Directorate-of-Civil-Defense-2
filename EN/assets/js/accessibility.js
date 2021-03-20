/**
 * ===========================
 *  Delclarations
 * ===========================
 */

// Get Saved Settings in Browser
let colorDetails = JSON.parse(window.localStorage.getItem('CurrentColor'));
let fontSize = window.localStorage.getItem('FontSize');
let colorInverted = Boolean(window.localStorage.getItem('ColorInverted'));

// Declare Functionality
function changeColor(color) {

    
    // If the color is set
    if (color.currentColor) {
        
        // Add Class To Body Tag
        $('body').addClass('color-changed');
        $(`.${color.colorName}`).addClass('active').siblings().removeClass('active');
        $(`.${color.colorName}`).html('<i class="fas fa-check"></i>').siblings().html('');

        $(':root').css('--main-green', color.currentColor);
        $(':root').css('--transparent-green', "#7c857f1a");

        if (color.currentColor === 'rgb(0, 0, 0)') {
            $(':root').css('--dark-green', 'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)) ' + color.currentColor);
        } else {
            $(':root').css('--dark-green', 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) ' + color.currentColor);
        }

        $('.is-svg').each(function () {
            if ($(this).css('fill') !== "none") {
                $(this).css('fill', color.currentColor);
            }
        });

        $(':root').css('--secondary-green', color.currentColor);
    }
}

function changeFontSize(level) {
    if (parseInt(level) === 0) {
        // Add Class To Body To Apply Style Changes
        $('body').addClass('small-font-size');

        // Change CSS Font Variables
        $(":root").css("--standard-size", (24 * 0.8) + "px");
        $(":root").css("--mobile-size-reg", "100 " + (12 * 0.8) + "px 'Poppins'");
        $(":root").css("--mobile-size-med", "200 " + (12 * 0.8) + "px 'Poppins'");
        $(":root").css("--mobile-size-semi-bold", "300 " + (12 * 0.8) + "px 'Poppins'");
        $(":root").css("--mobile-size-bold", "400 " + (12 * 0.8) + "px 'Poppins'");
        $(":root").css("--tiny-size-reg", "100 " + (14 * 0.8) + "px 'Poppins'");
        $(":root").css("--tiny-size-med", "200 " + (14 * 0.8) + "px 'Poppins'");
        $(":root").css("--tiny-size-semi-bold", "300 " + (14 * 0.8) + "px 'Poppins'");
        $(":root").css("--tiny-size-bold", "400 " + (14 * 0.8) + "px 'Poppins'");
        $(":root").css("--small-size-reg", "100 " + (16 * 0.8) + "px 'Poppins'");
        $(":root").css("--small-size-med", "200 " + (16 * 0.8) + "px 'Poppins'");
        $(":root").css("--small-size-semi-bold", "300 " + (16 * 0.8) + "px 'Poppins'");
        $(":root").css("--small-size-bold", "400 " + (16 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-a-size-reg", "100 " + (18 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-a-size-med", "200 " + (18 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-a-size-semi-bold", "300 " + (18 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-a-size-bold", "400 " + (18 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-b-size-reg", "100 " + (20 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-b-size-med", "200 " + (20 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-b-size-semi-bold", "300 " + (20 * 0.8) + "px 'Poppins'");
        $(":root").css("--med-b-size-bold", "400 " + (20 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-a-size-reg", "100 " + (22 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-a-size-med", "200 " + (22 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-a-size-semi-bold", "300 " + (22 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-a-size-bold", "400 " + (22 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-b-size-reg", "100 " + (24 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-b-size-med", "200 " + (24 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-b-size-semi-bold", "300 " + (24 * 0.8) + "px 'Poppins'");
        $(":root").css("--large-b-size-bold", "400 " + (24 * 0.8) + "px 'Poppins'");
        $(":root").css("--big-size-reg", "100 " + (34 * 0.8) + "px 'Poppins'");
        $(":root").css("--big-size-med", "200 " + (34 * 0.8) + "px 'Poppins'");
        $(":root").css("--big-size-semi-bold", "300 " + (34 * 0.8) + "px 'Poppins'");
        $(":root").css("--big-size-bold", "400 " + (34 * 0.8) + "px 'Poppins'");

    } else if (parseInt(level) === 1) {
        // Remove Classes From Body To Reset Default Style
        $('body').removeClass('small-font-size').removeClass('large-font-size');

        // Change CSS Font Variables
        $(":root").css("--standard-size", (24 * 1) + "px");
        $(":root").css("--mobile-size-reg", "100 " + (12 * 1) + "px 'Poppins'");
        $(":root").css("--mobile-size-med", "200 " + (12 * 1) + "px 'Poppins'");
        $(":root").css("--mobile-size-semi-bold", "300 " + (12 * 1) + "px 'Poppins'");
        $(":root").css("--mobile-size-bold", "400 " + (12 * 1) + "px 'Poppins'");
        $(":root").css("--tiny-size-reg", "100 " + (14 * 1) + "px 'Poppins'");
        $(":root").css("--tiny-size-med", "200 " + (14 * 1) + "px 'Poppins'");
        $(":root").css("--tiny-size-semi-bold", "300 " + (14 * 1) + "px 'Poppins'");
        $(":root").css("--tiny-size-bold", "400 " + (14 * 1) + "px 'Poppins'");
        $(":root").css("--small-size-reg", "100 " + (16 * 1) + "px 'Poppins'");
        $(":root").css("--small-size-med", "200 " + (16 * 1) + "px 'Poppins'");
        $(":root").css("--small-size-semi-bold", "300 " + (16 * 1) + "px 'Poppins'");
        $(":root").css("--small-size-bold", "400 " + (16 * 1) + "px 'Poppins'");
        $(":root").css("--med-a-size-reg", "100 " + (18 * 1) + "px 'Poppins'");
        $(":root").css("--med-a-size-med", "200 " + (18 * 1) + "px 'Poppins'");
        $(":root").css("--med-a-size-semi-bold", "300 " + (18 * 1) + "px 'Poppins'");
        $(":root").css("--med-a-size-bold", "400 " + (18 * 1) + "px 'Poppins'");
        $(":root").css("--med-b-size-reg", "100 " + (20 * 1) + "px 'Poppins'");
        $(":root").css("--med-b-size-med", "200 " + (20 * 1) + "px 'Poppins'");
        $(":root").css("--med-b-size-semi-bold", "300 " + (20 * 1) + "px 'Poppins'");
        $(":root").css("--med-b-size-bold", "400 " + (20 * 1) + "px 'Poppins'");
        $(":root").css("--large-a-size-reg", "100 " + (22 * 1) + "px 'Poppins'");
        $(":root").css("--large-a-size-med", "200 " + (22 * 1) + "px 'Poppins'");
        $(":root").css("--large-a-size-semi-bold", "300 " + (22 * 1) + "px 'Poppins'");
        $(":root").css("--large-a-size-bold", "400 " + (22 * 1) + "px 'Poppins'");
        $(":root").css("--large-b-size-reg", "100 " + (24 * 1) + "px 'Poppins'");
        $(":root").css("--large-b-size-med", "200 " + (24 * 1) + "px 'Poppins'");
        $(":root").css("--large-b-size-semi-bold", "300 " + (24 * 1) + "px 'Poppins'");
        $(":root").css("--large-b-size-bold", "400 " + (24 * 1) + "px 'Poppins'");
        $(":root").css("--big-size-reg", "100 " + (34 * 1) + "px 'Poppins'");
        $(":root").css("--big-size-med", "200 " + (34 * 1) + "px 'Poppins'");
        $(":root").css("--big-size-semi-bold", "300 " + (34 * 1) + "px 'Poppins'");
        $(":root").css("--big-size-bold", "400 " + (34 * 1) + "px 'Poppins'");

    } else if (parseInt(level) === 2) {
        // Add Class To Body To Apply Style Changes
        $('body').addClass('large-font-size');

        // Change CSS Font Variables
        $(":root").css("--standard-size", (24 * 1.2) + "px");
        $(":root").css("--mobile-size-reg", "100 " + (12 * 1.2) + "px 'Poppins'");
        $(":root").css("--mobile-size-med", "200 " + (12 * 1.2) + "px 'Poppins'");
        $(":root").css("--mobile-size-semi-bold", "300 " + (12 * 1.2) + "px 'Poppins'");
        $(":root").css("--mobile-size-bold", "400 " + (12 * 1.2) + "px 'Poppins'");
        $(":root").css("--tiny-size-reg", "100 " + (14 * 1.2) + "px 'Poppins'");
        $(":root").css("--tiny-size-med", "200 " + (14 * 1.2) + "px 'Poppins'");
        $(":root").css("--tiny-size-semi-bold", "300 " + (14 * 1.2) + "px 'Poppins'");
        $(":root").css("--tiny-size-bold", "400 " + (14 * 1.2) + "px 'Poppins'");
        $(":root").css("--small-size-reg", "100 " + (16 * 1.2) + "px 'Poppins'");
        $(":root").css("--small-size-med", "200 " + (16 * 1.2) + "px 'Poppins'");
        $(":root").css("--small-size-semi-bold", "300 " + (16 * 1.2) + "px 'Poppins'");
        $(":root").css("--small-size-bold", "400 " + (16 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-a-size-reg", "100 " + (18 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-a-size-med", "200 " + (18 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-a-size-semi-bold", "300 " + (18 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-a-size-bold", "400 " + (18 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-b-size-reg", "100 " + (20 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-b-size-med", "200 " + (20 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-b-size-semi-bold", "300 " + (20 * 1.2) + "px 'Poppins'");
        $(":root").css("--med-b-size-bold", "400 " + (20 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-a-size-reg", "100 " + (22 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-a-size-med", "200 " + (22 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-a-size-semi-bold", "300 " + (22 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-a-size-bold", "400 " + (22 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-b-size-reg", "100 " + (24 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-b-size-med", "200 " + (24 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-b-size-semi-bold", "300 " + (24 * 1.2) + "px 'Poppins'");
        $(":root").css("--large-b-size-bold", "400 " + (24 * 1.2) + "px 'Poppins'");
        $(":root").css("--big-size-reg", "100 " + (34 * 1.2) + "px 'Poppins'");
        $(":root").css("--big-size-med", "200 " + (34 * 1.2) + "px 'Poppins'");
        $(":root").css("--big-size-semi-bold", "300 " + (34 * 1.2) + "px 'Poppins'");
        $(":root").css("--big-size-bold", "400 " + (34 * 1.2) + "px 'Poppins'");
    }
}

// Apply Settings
changeColor(colorDetails ? colorDetails : "");
changeFontSize(fontSize);

if (colorInverted) {
    $('html').addClass('inverted').addClass('invert-colors');
    $('.accessibility-settings .window .options-list .option .switch span.disabled').addClass('active').siblings().removeClass('active');
}


/**
 * ===========================
 *  Open/Close Accessibility
 * ===========================
 */
$('.tools-bar .tools .tool.accessibilty').click(function (e) {
    $('.accessibility-settings').fadeIn(200);
    $('body').css('overflow', 'hidden');
    e.stopPropagation();
});

$('.accessibility-settings .window .close-window').click(function () {
    $(this).parents('.accessibility-settings').fadeOut(200);

    if ($(window).width() >= 992) {
        $('body').css('overflow', 'auto');
    }
});

$('.accessibility-settings .window .action-btns .ab.save').click(function () {
    $(this).parents('.accessibility-settings').fadeOut(200);

    if ($(window).width() >= 992) {
        $('body').css('overflow', 'auto');
    }

    return false;
});

$(window).click(function () {
    $('.accessibility-settings').fadeOut(200);
    $('body').css('overflow', 'auto');
});

$('.accessibility-settings .window').click(function (e) {
    e.stopPropagation();
});

/**
 * ===========================
 *  Font Sizer
 * ===========================
 */
var levels = ['Small', 'Medium', 'Large'];

$('input[type="range"]').each(function (e) {
    var val = $(this).val();
    var min = $(this).attr('min');
    var max = $(this).attr('max');

    if (fontSize) {
        val = fontSize;
        $(this).val(fontSize);
    }

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

        // Save The Color in The Browser
        window.localStorage.setItem('FontSize', parseInt(cur));

        // Apply Changes!
        changeFontSize(parseInt(cur));
    });
});

/**
 * ===========================
 *  Color Changer
 * ===========================
 */
$('.accessibility-settings .window .options-list .option .color-changer .color').click(function () {
    var getCurrentColor = $(this).css('background-color');
    var colorName = $(this).attr('class').replace("color ", "");

    $(this).addClass('active').siblings().removeClass('active');
    $(this).html('<i class="fas fa-check"></i>').siblings().html('');
    
    // Remove Invert
    window.localStorage.removeItem('ColorInverted');
    $('html').removeClass('inverted').removeClass('invert-colors');
    $('.accessibility-settings .window .options-list .option .switch span.enabled').addClass('active').siblings().removeClass('active');

    // Save The Color in The Browser
    window.localStorage.setItem('CurrentColor', JSON.stringify({
        colorName: colorName,
        currentColor: getCurrentColor
    }));

    // Apply Changes!
    changeColor({
        colorName: colorName,
        currentColor: getCurrentColor
    });
});

/**
 * ===========================
 *  Colors Inverter
 * ===========================
 */
$('.accessibility-settings .window .options-list .option .switch span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).hasClass('disabled')) {

        // Save The Color in The Browser
        window.localStorage.setItem('ColorInverted', true);

        // Apply Changes!
        $('html').addClass('inverted').addClass('invert-colors');
    } else {
        window.localStorage.removeItem('ColorInverted');
        $('html').removeClass('inverted').removeClass('invert-colors');
    }
});

/**
 * ===========================
 *  Print Document
 * ===========================
 */
$('.accessibility-settings .window .options-list .option .print-page .print-doc').click(function () {
    window.print();
});

$('.mobile-bar .mobile-print').click(function () {
    window.print();

    return false;
});

/**
 * ===========================
 *  Reset
 * ===========================
 */
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

        $(this).css('--value', def.toString());
        $(this).val(def);
    });

    // Clear All Saved Settings
    window.localStorage.clear();
    $('html').attr('style', '').attr('class', '');

    // changeColor({
    //     currentColor: "rgb(16, 130, 64)",
    //     colorName: "green"
    // });

    // changeFontSize(1);

    return false;
});
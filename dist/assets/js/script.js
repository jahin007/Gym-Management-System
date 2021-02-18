$(document).ready(function() {
    // 
    var panelDropdown = $('#panelDropdown');
    panelDropdown.on('click', function() {
        $("#panel").slideToggle();
    });

    var body = $("#kt_body");

    // Toggle For Mobile Devices
    var togglemenu = function() {
        if (parseInt($(window).width()) < 991) {
            $('#kt_header_mobile_topbar_toggle').on('click', function() {
                $(this).toggleClass('active');
                body.toggleClass('topbar-mobile-on');
            });
        }
    };

    togglemenu();
    $(window).resize(function() {
        togglemenu();
    });

    var skin_theme = null;
    $("input[name='skin-theme']").click(function() {
        skin_theme = this.value;
        if (skin_theme == 'light') {
            $('#dark-theme-css').attr("href", "assets/css/themes/layout/Theme/light-theme.css");
        } else if (skin_theme == 'dark') {
            $('#dark-theme-css').attr("href", "assets/css/themes/layout/Theme/dark-theme.css");
        } else if (skin_theme == 'semi-dark') {
            $('#dark-theme-css').attr("href", "assets/css/themes/layout/Theme/semi-dark-theme.css");
        }
    });

    var skin_color = null;
    $("input[name='skin-color']").click(function() {
        skin_color = this.value;
        if (skin_color == 'purple') {
            $('#color-css').attr("href", "assets/css/themes/layout/purple.css");
        } else if (skin_color == 'yellow') {
            $('#color-css').attr("href", "assets/css/themes/layout/yellow.css");
        } else if (skin_color == 'green') {
            $('#color-css').attr("href", "assets/css/themes/layout/green.css");
        } else if (skin_color == 'red') {
            $('#color-css').attr("href", "assets/css/themes/layout/red.css");
        } else if (skin_color == 'blue') {
            $('#color-css').attr("href", "assets/css/themes/layout/blue.css");
        } else if (skin_color == 'dark') {
            $('#color-css').attr("href", "assets/css/themes/layout/dark.css");
        } else if (skin_color == 'semi-dark') {
            $('#color-css').attr("href", "assets/css/themes/layout/semi-dark.css");
        }
    });

    var skin_navbar = null;
    $("input[name='skin-navbar']").click(function() {
        skin_navbar = this.value;
        if (skin_navbar == 'purple') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/purple-header.css");
        } else if (skin_navbar == 'yellow') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/yellow-header.css");
        } else if (skin_navbar == 'green') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/green-header.css");
        } else if (skin_navbar == 'red') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/red-header.css");
        } else if (skin_navbar == 'blue') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/blue-header.css");
        } else if (skin_navbar == 'dark') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/dark-header.css");
        } else if (skin_navbar == 'semi-dark') {
            $('#header-color-css').attr("href", "assets/css/themes/layout/semi-dark-header.css");
        }
    });

    var number_of_month_input = $("#number-of-month-input");
    var package_amount_input = $("#package-amount-input");
    var admission_fee_input = $("#admission-fee-input");
    var discount_input = $("#discount-input");
    var total_input = $("#total-input");

    var calculateTotal = function() {
        var number_of_month = number_of_month_input.val();

        // var package_amount = 1200 * number_of_month;
        // var admission_fee = 2000;
        // var discount = 200 * number_of_month;

        var package_amount = package_amount_input.val() * number_of_month;
        var admission_fee = admission_fee_input.val();
        var discount = discount_input.val() * number_of_month;

        var total = parseInt(package_amount) + parseInt(admission_fee) - parseInt(discount);

        package_amount_input.val(package_amount);
        admission_fee_input.val(admission_fee);
        discount_input.val(discount);
        total_input.val(total);
    };

    var number_of_month_input_has_value = false;
    var package_amount_input_has_value = false;
    var admission_fee_input_has_value = false;
    var discount_input_has_value = false;

    number_of_month_input.on("change", function() {
        number_of_month_input_has_value = true;
        if (number_of_month_input_has_value && package_amount_input_has_value && admission_fee_input_has_value && discount_input_has_value) {
            calculateTotal();
        }
    });

    package_amount_input.on("change", function() {
        package_amount_input_has_value = true;
        if (number_of_month_input_has_value && package_amount_input_has_value && admission_fee_input_has_value && discount_input_has_value) {
            calculateTotal();
        }
    });

    admission_fee_input.on("change", function() {
        admission_fee_input_has_value = true;
        if (number_of_month_input_has_value && package_amount_input_has_value && admission_fee_input_has_value && discount_input_has_value) {
            calculateTotal();
        }
    });

    discount_input.on("change", function() {
        discount_input_has_value = true;
        if (number_of_month_input_has_value && package_amount_input_has_value && admission_fee_input_has_value && discount_input_has_value) {
            calculateTotal();
        }
    });

});

var themeClrApply = $('#themeClrApply');
var selectClr = $('#selectClr');
themeClrApply.on('click', function() {

    var selectedClr = selectClr.val();
    $('#kt_aside,#kt_brand,#kt_aside_menu').css("background-color", selectedClr);
})
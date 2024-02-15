$(document).ready(function() {
    // تنفيذ التحقق عند تحميل الصفحة
    checkWidth();

    // تنفيذ التحقق عند تغيير حجم الشاشة
    $(window).resize(function() {
        checkWidth();
    });
});

function checkWidth() {
    // التحقق من عرض الشاشة
    if ($(window).width() <= 1020) {
        // إذا كان عرض الشاشة أقل من أو يساوي 1023 بكسل
        $('#list').fadeIn(); // تغيير الاستايل إلى fadeIn()
        $('.nav').css('justifyContent', "space-between");

        if($(window).width() <=770){

            $('.nav').css('flexDirection',"row")

        }
    } else {
        // إذا كان عرض الشاشة أكبر من 1023 بكسل
        $('#list').fadeOut(); // تغيير الاستايل إلى fadeOut() أو أي استايل آخر
    }
}

var x = false;

function show() {
    if (x === false) {
        $('.links').fadeIn();
        x = true;
    } else {
        $('.links').hide();
        x = false;
    }
}


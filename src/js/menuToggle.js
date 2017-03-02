$(function() {
    var toggleBtn = $('#menu-trigger'),
        toggleMenu = $('header ul');
    toggleBtn.click(function() {
        toggleMenu.slideToggle(200);
    });
    $(window).resize(function() {
        if ($(window).width() > 758) {
            toggleMenu.removeAttr('style');
        }
    });
});

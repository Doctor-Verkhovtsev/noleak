$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 140;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 600);
    e.preventDefault();
});

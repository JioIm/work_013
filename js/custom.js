$(function () {

    $('.MainVisual .main_visual_slide').slick({
        dots: false,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    });

    $('.MainInfo .info_slide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.MainSlide .sub_tab_inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.MainSlide .arrows .left').on('click', function () {
        $('.sub_tab_inner').slick('slickPrev');
    });
    $('.MainSlide .arrows .right').on('click', function () {
        $('.sub_tab_inner').slick('slickNext');
    });


    $('.list_area .itm').on('click', function () {
        $('.itm').removeClass('on');

        $(this).addClass('on');
    });


    $('.main_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });



    $('.sub_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_area .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });
})


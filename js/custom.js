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


    $('.MainMenu .inner').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.list_area .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
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


    // $('.main_prem .arrows .left').on('click', function () {
    //     $('.prem_slide').slick('slickPrev');
    // });
    // $('.main_prem .arrows .right').on('click', function () {
    //     $('.prem_slide').slick('slickNext');
    // });
})


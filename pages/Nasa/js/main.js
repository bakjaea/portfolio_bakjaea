

let bodyHeight = $('body').height();

let imgOffT = $('.alien').offset().top;

$(window).on('scroll',function(e){
    let pgY = e.pageY;
    let scr = $(window).scrollTop();
    let result = 360 + scr;

    let rotateDgr = scr * 3.60;
        rotateDgr = parseInt(rotateDgr) / 75
        console.log(rotateDgr);


    $('.alien').css({
        'top' : result,
        'transform' : `rotate(${rotateDgr}deg)`
    });
    imgOffT = $('.alien').offset().top;

    let pg2Top = $('.page2').offset().top;
    let pg8Top = $('.page8').offset().top;
    if(scr >=pg2Top - 400&& scr <=pg8Top){
        $('.alien').css({opacity : 0.0,
                         filter : 'blur(6px)'})
    }else{
        $('.alien').css({opacity : 1,
            filter : 'blur(0px)',
            mixBlendingMode : 'normal'})    }

});


$('.tabs li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.tabcons').children().eq(i).show().siblings().hide();
})
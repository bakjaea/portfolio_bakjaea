$('.search').click(function(){
    alert('저를 찾으셨나요? 🙋‍♀️\n박재아 / 010-8979-5835')
})


$('.menu li').click(function(){
    let i = $(this).index();
    let oft = $('.sectionW').children('section').eq(i).offset().top;

    $('html,body').animate({'scrollTop':oft})

});

$('.logo').click(function(){
    $('html,body').animate({'scrollTop':0})
});

$(window).scroll(function(){

    let scr = $(window).scrollTop();

    let sec0 = $('.section0').offset().top;
    let sec1 = $('.section1').offset().top;
    let sec2 = $('.section2').offset().top;
    let sec3 = $('.section3').offset().top;
    let sec4 = $('.section4').offset().top;
    let sec5 = $('.section5').offset().top;

    if(scr>=0 && scr<=sec0){
        $('.menu li').eq(0).addClass('active').siblings().removeClass('active');
    }
    else if(scr<=sec1){
        $('.menu li').eq(1).addClass('active').siblings().removeClass('active');
    }else if(scr<=sec2){
        $('.menu li').eq(2).addClass('active').siblings().removeClass('active');
    }else if(scr<=sec3){
        $('.menu li').eq(3).addClass('active').siblings().removeClass('active');
    }else if(scr<=sec4){
        $('.menu li').eq(4).addClass('active').siblings().removeClass('active');
    }else{
        $('.menu li').eq(5).addClass('active').siblings().removeClass('active');
    }

});

$('#ssimg').click(function(e){
    e.preventDefault();

    let img = $(this).find('.pic').html();
    $('.view').find('figure').html(img);
    $('.view').stop().fadeIn();
    
});

$('.closeBtn, .closeWrap').click(function(){
    $('.view').stop().fadeOut();
});
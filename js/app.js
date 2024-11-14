// header - 아래로 내리거나 움직임이 없으면 없어지고, 위로 올리면 생기는
let lastScroll =0;
$(window).scroll(function(){
    let cuScroll = $(this).scrollTop();
    // 스크롤을 내렸을때
    if(lastScroll < cuScroll){
        $('header').stop().animate({top:-150},500);
    }else{
        $('header').stop().animate({top:0},500);
    }
    lastScroll = cuScroll;
})
// side_map
$('.dark_btn').click(function(){
    $('.side_map').css('display','block');
})
$('.light_btn').click(function(){
    $('.side_map').css('display','none');
})
// vs01 slider- 페이지 이동 
let visual = $('.m_contents').bxSlider({
    // options를 객체형식으로 작성 키 : 값;
    mode:'horizontal', //vertical face 도 있음
    speed: 1000,
    auto:true, //auto를 킬때는 true   
    pager:false,
    controls:false,
    // auto:false,
});
$('#visual .vs01_prev').click(function(){
    visual.goToPrevSlide();
})
$('#visual .vs01_next').click(function(){
    visual.goToNextSlide();
})
// vs02 change - 버튼을 누르면 바뀌고 안누를 때도 자동 변화
// 버튼을 눌렀을때 바뀌는 효과를 주기 위해서는 제이쿼리로 diplay:none 과 display:block을 번갈아가면서 만들어야함.
let side = $('.vs02 .container .content').bxSlider({
    auto:true,
    mode:'vertical',
    pagerCustom:'#side',
    controls:false,
})
// vs06 slider 
let slide = $('.slides').bxSlider({
    auto:true,
    slideMargin:20,
    slideWidth:440,
    minSlides:3,
    maxSlides:3,
    moveSlides:0,
    pager:false,
    controls:false,
    // auto:false,
});
$('.prev').click(function(){
    slide.goToPrevSlide();
})
$('.next').click(function(){
    slide.goToNextSlide();
})

// aside 검색버튼 누르면 검색창 뜨기
$('#search > .user_type').hide();
let onOff = false;
$('#search > .user_t').click(function(){
    if(onOff == false){
        $('#search').animate({
            padding: '0 20px',
            width: '200px',
            borderRadius:'40px'
        });
        $('#search > .user_type').show();
        console.log('#search > .user_type');
        onOff = true;
    }else{
        $('#search').animate({
            padding: '20px 25px',
            width: '30px',
            borderRadius:'50%',
        });
        $('#search > .user_type').hide();
        onOff = false;
    }
})

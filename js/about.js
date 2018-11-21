$(function(){
  var list = $('.wrap_three ul li')
  $(window).scroll(function(){
    if(list.eq(0).offset().top <= $(document).scrollTop()+$(window).height()){
      list.eq(0).addClass('show')
      list.eq(4).addClass('show')
    }
    if(list.eq(1).offset().top <= $(document).scrollTop()+$(window).height()){
      list.eq(1).addClass('show')
      list.eq(5).addClass('show')
    }
    if(list.eq(2).offset().top <= $(document).scrollTop()+$(window).height()){
      list.eq(2).addClass('show')
      list.eq(6).addClass('show')
    }
    if(list.eq(3).offset().top <= $(document).scrollTop()+$(window).height()){
      list.eq(3).addClass('show')
      list.eq(7).addClass('show')
    }
  })
})
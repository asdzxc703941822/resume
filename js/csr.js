$(function(){
  var $img = $('.top>.banner>.img');
  var size = 0;
  var timer = null;
  function mov(){
    if(size<=-3000){
      $img.animate({
        left:0
      },0)
      size = 0
    }
    size -=1000
    $img.animate({
      left:size
    })
  }
  timer =setInterval(mov,10000)
  var $list = $('.top>.banner>.list');
  $list.on('mouseenter','a',function(){
    if($(this).is('a:first-child')){
      $img.animate({
        left:0
      })
      size = 0
    }else if($(this).is('a#list_two')){
      $img.animate({
        left:-1000
      })
      size = -1000
    }else if($(this).is('a#list_three')){
      $img.animate({
        left:-2000
      })
      size = -2000
    }
  })
  console.log($list)
})

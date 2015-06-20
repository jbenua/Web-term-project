$('document').ready(function(){  

  $('#shooting_star1, #shooting_star2, #shooting_star3').on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function(e) {
    $(this).css({
      left: Math.floor(Math.random() * 100) + '%',
      top: Math.floor(Math.random() * 50) + 'px'},0);
  });
  
});
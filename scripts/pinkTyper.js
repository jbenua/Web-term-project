$(window).load(function() {
    console.log('page loaded');
    paragraph();

            function paragraph() {
              var chars = ['P','i','n','k',' ','s','t','a','r','s',' ','a','r','e',' ','f','a','l','l','i','n','g',' ','i','n',' ','l','i','n','e','s','.','.','.'];
              printLetters(chars, 0);
            }
            function printLetters(chars, i) {
                  setTimeout(function () {
                      if (i < chars.length){
                        appear(chars[i]);
                        i += 1;
                        printLetters(chars, i);
                      }
                      else{
                        par.innerHTML="";
                        printLetters(chars, 0);
                      };
                  }, 100);
              } 

            function appear(letter) {
              //alert(letter);
              $('#par').append(letter); //OR:  document.getElementById('par').innerHtml += letter;
            }

  $('#shooting_star1, #shooting_star2, #shooting_star3').on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function(e) {
    $(this).css({
      left: Math.floor(Math.random() * 100) + '%',
      top: Math.floor(Math.random() * 50) + 'px'},0);
  });
});

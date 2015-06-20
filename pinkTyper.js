$(window).load(function() {
    console.log('page loaded');
    paragraph();

            function animateText(textArea) {
              var text = textArea.value;
              var to = text.length, from = 0;
            }

            function paragraph() {
              var chars = ['P','i','n','k',' ','s','t','a','r','s',' ','a','r','e',' ','f','a','l','l','i','n','g',' ','i','n',' ','l','i','n','e','s','.','.','.'];
              printLetters(chars, 0);
            }
            function printLetters(chars, i) {
                  setTimeout(function () {
                      if (i < chars.length){
                        appear(chars[i]);
                      }
                      else return;
                      i += 1;  
                      printLetters(chars, i);
                  }, 100);
              } 


            function appear(letter) {
              //alert(letter);
              $('#par').append(letter); //OR:  document.getElementById('par').innerHtml += letter;
            }
});

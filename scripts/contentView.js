        function expanddiv(id){
            raise_opacity(0);
            var currentEl=document.getElementById(id);
            for (var i=0, elems = document.getElementsByTagName('p'), len = elems.length; i<len; i++) {
                    removeClass(elems[i], 'active');
            }

            if (currentEl) {
                currentEl.className += ' active';
                par.style.display="none";
            }
            
            else par.style.display="block";
        };
        
        function hasClass(element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
        function removeClass(element, cls){
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            element.className = element.className.replace(reg,' ');
        }
        function raise_opacity(cur_opacity)
        {
            setTimeout(function(){
                if (cur_opacity < 0.7) {
                    set_opacity(cur_opacity);
                }
                else return;
                cur_opacity+=0.05;
                raise_opacity(cur_opacity);
            }, 1000);
        }
        
        function set_opacity(opacity)
        {
            glass.style.backgroundColor=rgba(50, 27, 58, opacity);
        }
            
            
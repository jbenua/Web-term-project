        function expanddiv(id){
            var a=parseOpacity();
            var opacity = a ? a : 0
            var currentEl=document.getElementById(id);
            for (var i=0, elems = document.getElementsByTagName('p'), len = elems.length; i<len; i++) {
                    removeClass(elems[i], 'active');
            }
            if (currentEl) {
                raise_opacity(opacity);
                currentEl.className += ' active';
                par.style.display="none";
            }
            else
            {
                decrease_opacity(opacity);
                par.style.display="block";
            }
        };
        function parseOpacity()
        {
            var temp=glass.style.backgroundColor.split(' ');
            temp=temp[temp.length-1].split(')');
            return temp[0];
        }
        function removeClass(element, cls){
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            element.className = element.className.replace(reg,' ');
        }
        function decrease_opacity(cur_opacity)
        {
            setTimeout(function(){
                if (cur_opacity > 0) {
                    set_opacity(cur_opacity);
                }
                else{
                    set_opacity(0);
                    return;
                    }
                cur_opacity-=0.005;
                decrease_opacity(cur_opacity);
            }, 0.0001);
        }
        function raise_opacity(cur_opacity)
        {
            setTimeout(function(){
                if (cur_opacity < 0.7) {
                    set_opacity(cur_opacity);
                }
                else{
                    //set_opacity(0.7);
                    alert("i'm returning with op=" + parseOpacity());
                    return;
                }
                cur_opacity+=0.005;
                raise_opacity(cur_opacity);
            }, 0.0001);
        }
        
        function set_opacity(opacity)
        {
            glass.style.backgroundColor="rgba(50, 27, 58, "+opacity+")";
        }
            
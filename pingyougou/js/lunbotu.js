window.addEventListener('load',function(){
    var zuo = this.document.querySelector('.zuo');
    var you = this.document.querySelector('.you');
    var div = this.document.querySelector('.focus');
    var ul = div.querySelector('ul');
    var ol = this.document.querySelector('.circle');
    var w = div.offsetWidth;
    
    
    function move(obj,target,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var step = (target - obj.offsetLeft) / 10 ;
            var step = step > 0 ? Math.ceil(step) : Math.floor(step); 
            if(obj.offsetLeft == target ){
                clearInterval(obj.timer);
                if(callback){
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        },30)
    }
    for(var i = 0; i < ul.children.length; i++){
        var li = this.document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0;i < ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'bgc';
            var index = this.getAttribute('index'); 
            num = index;
            c = index;
            move(ul,-w*index);
        })
        
    }
    ol.children[0].className = 'bgc';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var c = 0;
    var flag = true;
    you.addEventListener('click',function(){
        
        if(flag){
            flag = false;
            if(num == ul.children.length - 1){
                ul.style.left = 0;
                num = 0;
            }
            
            num++;
            move(ul,-num*w,function(){
                flag = true;
            });
            c++;
            
            if(c == ol.children.length){
                c = 0;
            }
            for(var i = 0;i < ol.children.length;i++){
                ol.children[i].className = '';
            }
            ol.children[c].className = 'bgc';
        }

    })
    zuo.addEventListener('click',function(){
        
        if(num == 0){
            num = ul.children.length - 1;
            console.log(num);
            console.log(-num * w);
            ul.style.left = -num * w + 'px';
        }
        num--;
        move(ul,-num*w);
        c--;
        
        if(c < 0){
            c = ol.children.length - 1;
        }
        for(var i = 0;i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[c].className = 'bgc';

    })
    var timer = this.setInterval(function(){
        you.click();
    },3000); 


    
    
    div.addEventListener('mouseenter',function(){
        zuo.style.display = 'block';
        you.style.display = 'block';
        clearInterval(timer);
        timer = null;    
    })
    div.addEventListener('mouseleave',function(){
        zuo.style.display = 'none';
        you.style.display = 'none';    
        timer = setInterval(function(){
            you.click();
        },2000);
    })


    var w329 = this.document.querySelector('.w329');
    var wul = w329.querySelector('ul');
    var wol = w329.querySelector('ol');
    for(var i = 0; i < wul.children.length; i++){
        var li = this.document.createElement('li');
        li.setAttribute('index',i);
        wol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0;i < wol.children.length;i++){
                wol.children[i].className = '';
            }
            this.className = 'bgc';
            var index = this.getAttribute('index'); 
            num = index;
            c = index;
            move(wul,-329*index);
        })
        wol.children[0].className = 'bgc';

    }
    
    
    
})
window.addEventListener('load',function(){
    var ico = this.document.querySelectorAll('.ls_ico');
    console.log(ico);
    var x = -17;
    var y = -16;
    for(var i = 0;i < ico.length;i++){
        a = i % 4;
        b = Math.floor(i / 4);
        nx = x - 62.5 * a;
        ny = y - 71 * b;
        ico[i].style.backgroundPosition = nx+'px '+ny+'px';     
    }
})
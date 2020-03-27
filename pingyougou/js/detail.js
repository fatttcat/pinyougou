window.addEventListener('load',function(){
      var bigimg = document.querySelector('.bigimg');
	  var mask = document.querySelector('.mask');
	  var big = document.querySelector('.big');
	  var img = document.querySelector('.big img');
	  console.log(img);
	  console.log(mask);
	  
	  bigimg.addEventListener('mouseover',function(){
		  mask.style.display = 'block';
		  big.style.display = 'block';
	  })
	  bigimg.addEventListener('mouseout',function(){
		  mask.style.display = 'none';
		  big.style.display = 'none';
	  })
	  bigimg.addEventListener('mousemove',function(e){
		  var x =  e.pageX - this.offsetLeft;
		  var y = e.pageY - this.offsetTop;
		  var maskx = x - mask.offsetWidth / 2 ;
		  var masky = y- mask.offsetHeight / 2;
		  var maskmax = bigimg.offsetWidth - mask.offsetWidth;
		  if(maskx <= 0){
			  maskx = 0;
		  } else if(maskx >= maskmax) {
			  maskx = maskmax;
		  }
		  if(masky <= 0){
			  masky = 0;
		  }else if(masky >= maskmax) {
			  masky = maskmax;
		  }
		  mask.style.left = maskx + 'px';
		  mask.style.top = masky + 'px';

		  var imgmx = img.offsetWidth - big.offsetWidth;
		  var imgmy = img.offsetHeight - big.offsetHeight;
		  var imgx = maskx * imgmx / maskmax;
		  var imgy = masky * imgmy / maskmax;
		  img.style.left = -imgx + 'px';
		  img.style.top = -imgy + 'px';

	  })
})
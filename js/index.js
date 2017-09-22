window.onload = function(){
	// 侧导航
	let cebian = document.getElementsByClassName('banner-left1')[0];
	let lis2 = cebian.getElementsByTagName('li');
	let item = cebian.getElementsByClassName('item');
	for(let i=0;i<lis2.length;i++){
		lis2[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis2[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
	// btn
	let section = $('section')[0];
	let banner = document.getElementsByClassName('banner')[0];
	let lis1 = banner.getElementsByTagName('li'); 
	let btns = document.getElementsByClassName('btn-list')[0];
	let lis = btns.getElementsByTagName('li');
	let lefts = $('.banner-left',section)[0];
	let rights = $('.banner-right',section)[0];
	let now = 0;
	let next = 0;
	let w = parseInt(getComputedStyle(banner,null).width);
	let flag = true;
	console.log(w);
	// let now = 0;
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onclick = function(){
	// 		console.log(i);
	// 		lis1[now].style.display = 'none';
 //            lis1[i].style.display = 'block';
	// 		now = i;
	// 	}
	// }

// ////////////////////////////////////////////////////////////

		// for(let i=0;i<lis.length;i++){
		// 	lis[i].onclick = function(){
		// 		for(let j=0;j<lis1.length;j++){
		// 			lis1[j].style.display = 'none';
		// 			lis[j].style.background = '#98979B';
		// 		}
		// 		lis1[i].style.display = 'block';
		// 		lis[i].style.background = '#fff';
		// 		num = i;
		// 	}
		// }


		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				if(now == i){return;}
				lis[now].style.background = '#98979B';
				lis[i].style.background = '#fff';
				lis1[i].style.left = `${w}px`;
				animate(lis1[now],{left:-w});
				animate(lis1[i],{left:0});
				now = next = i;

			}
		}
//////////////////////////////////////////////////////////////
		// lefts.onclick = function(){
		// 	moveL();
		// }
		// rights.onclick = function(){
		// 	move();
		// }

		rights.onclick = function(){
            if(!flag){
            	return;
            }
            move();
            flag = false;

		}
		lefts.onclick = function(){
			moveL();
		}

		let num = 0;
        let t;
        t = setInterval(move,3000);
        section.onmouseover = function(){
        	clearInterval(t);
        }
        section.onmouseout = function(){
        	t = setInterval(move,3000);
        }
//////////////////////////////////////////////////////////////
   //      function move(){
   //      	num++;
   //      	if(num == lis1.length){
   //      		num = 0;
   //      	}
   //      	for(let i=0;i<lis1.length;i++){
   //      		lis1[i].style.display = 'none';
			// 	lis[i].style.background = '#98979B';
			// }
			// lis1[num].style.display = 'block';
			// lis[num].style.background = '#fff';

   //      	}

   //      function moveL(){
   //      	num--;
   //      	if(num < 0){
   //      		num = lis1.length-1;
   //      	}
   //      	for(let i=0;i<lis1.length;i++){
   //      		lis1[i].style.display = 'none';
			// 	lis[i].style.background = '#98979B';
			// }
			// lis1[num].style.display = 'block';
			// lis[num].style.background = '#fff';

   //      	}


/////////////////////////////////////////////////////////////////
            //轮播
    	function move(){
        	next++;
        	if(next == lis1.length){
        		next = 0;
        	}
        	lis[now].style.background = '#98979B';
			lis[next].style.background = '#fff';
        	lis1[next].style.left = `${w}px`;
        	animate(lis1[now],{left:-w});
        	animate(lis1[next],{left:0},function(){
        		flag = true;
        	});
        	now = next;
   
		}

		function moveL(){
        	next--;
        	if(next < 0){
        		next = lis1.length-1;
        	}
        	lis[now].style.background = '#98979B';
			lis[next].style.background = '#fff';
        	lis1[next].style.left = `${-w}px`;
        	animate(lis1[now],{left:w});
        	animate(lis1[next],{left:0},function(){
        		flag = true;
        	});
        	now = next;

        	}

	//小米明星单品
	let section1 = $('section')[2];
	let starul = document.getElementsByClassName('star-bottom')[0];
	let xyou = document.getElementsByClassName('btn-left')[0];  //you
	let ya = xyou.getElementsByTagName('a')[0];
	let xzuo = document.getElementsByClassName('btn-right')[0]; //zuo
	let za = xzuo.getElementsByTagName('a')[0];
	console.log(za);
	// let flag1 = true;
	za.style.color = '#e0e0e0';
	ya.style.color = '#808080';
	xyou.onclick = function(){
		starul.style.marginLeft = `${-1226}px`;
		starul.style.transition = `all ${0.5}s`;
		// let pos = parseInt(getComputedStyle(starul,null).left);
		// let widths = parseInt(getComputedStyle(starul,null).width);
		// if(pos>=0){
		// 	ya.style.color = '#e0e0e0';
		// 	za.style.color = '#808080';
		// }
		// if(flag&&(pos+widths)>1226){
		// 	moveX(starul,'rigth',1226);
		// 	flag1 = false;
		// }
		// let lefts = parseInt(getComputedStyle(starul,null).left);
		// if(lefts<=-1240){
		// 	return;
		// }
		// lefts = lefts - 1240;
		// starul.style.left = lefts + 'px';

	}
	xzuo.onclick = function(){
		starul.style.marginLeft = `${0}px`;
		starul.style.transition = `all ${0.5}s`;
		
		// let pos = parseInt(getComputedStyle(starul,null).left);
		// let widths = parseInt(getComputedStyle(starul,null).width);
		// if((pos+widths)<=1226){
		// 	za.style.color = '#e0e0e0';
		// 	ya.style.color = '#808080';
		// }
		// if(flag&&pos<0){
		// 	moveX(starul,'left',1226);
		// 	flag1 = false;
		// }
		// let lefts = parseInt(getComputedStyle(starul,null).left);
		// if(lefts>=0){
		// 	return;
		// }
		// lefts = lefts + 1240;
		// starul.style.left = lefts + 'px';
	}

	// function moveX(starul,direction,step){
	// 	direction = direction || 'right';
	// 	let lefts = parseInt(getComputedStyle(starul,null).left);
	// 	step = direction == 'right' ? -step : step;
	// 	animate(starul,{left:lefts+step},()=>{flag = true});
	// }
	
	function starmove(){
		starul.style.marginLeft = `${-1226}px`;
		starul.style.transition = `all ${0.5}s`;
	}
	function starmoveL(){
		starul.style.marginLeft = `${0}px`;
		starul.style.transition = `all ${1}s`;
	}
	let start1 = setInterval(starmoveL,4000);
	let start = setInterval(starmove,8000);
}

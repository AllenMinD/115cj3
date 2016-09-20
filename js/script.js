/*
定时器的使用
var timer=null;			//初始化一个定时器
clearInterval(timer);	//每次使用定时器之前，【一定】要清空一次定时器，来解决重复多次触发定时器的BUG
timer = setInterval(func, time);	//定时器用setInterval这个函数产生，里面有两个参数：第一个参数是一个函数a，第二个是时间b（毫秒）
									//意思是"每过b毫秒后执行一次函数a"
		
Math对象：
	Math.floor(x) 用来对x进行下取整
	Math.random() 用来产生一个 0<=y<1 的随机数，若要产生0-7的随机数，即 Math.random()*8 即可
*/

var data=['姓杨的小弟a ！', '胸哥 ！', '老班长 ！', '麦大大 ！', '伟志锅锅 ！', '姓林的小弟b ！'];
var timer=null;
var flag=0;	/*0表示抽奖未开始，1表示抽奖开始了*/

window.onload = function(){
	var play = document.getElementById('play');
	var stop = document.getElementById('stop');
	
	//用鼠标 开始抽奖
	play.onclick = playFunc;
	//用鼠标 停止抽奖
	stop.onclick = stopFunc;
	
	//用键盘 开始抽奖
	document.onkeyup = function(e){
		e = e || window.event;
		if (e.keyCode==13)
		{
			if (flag==0)	//flay==0说明还没按开始
			{
				playFunc();
				flag=1;
			}
			else 
			{
				stopFunc();
				flag=0;
			}
		}
	}

}	

function playFunc()
{
	flag=1;									//抽奖开启了
	var play = document.getElementById('play');
	var title = document.getElementById('title');
	clearInterval(timer);					//使用定时器之前，先清空
	timer = setInterval(function(){
		var randomResult = Math.floor(Math.random()*data.length);
		title.innerHTML = data[randomResult];
	}, 50);
	
	play.style.background = '#ccc';			//在抽奖时改变"开 始"按钮的背景颜色
}


function stopFunc()
{
	clearInterval(timer);	//清空定时器，即可停止抽奖
	var play = document.getElementById('play');
	play.style.background = '#32CD32';
	flag=0;
}











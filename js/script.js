/*
��ʱ����ʹ��
var timer=null;			//��ʼ��һ����ʱ��
clearInterval(timer);	//ÿ��ʹ�ö�ʱ��֮ǰ����һ����Ҫ���һ�ζ�ʱ����������ظ���δ�����ʱ����BUG
timer = setInterval(func, time);	//��ʱ����setInterval�������������������������������һ��������һ������a���ڶ�����ʱ��b�����룩
									//��˼��"ÿ��b�����ִ��һ�κ���a"
		
Math����
	Math.floor(x) ������x������ȡ��
	Math.random() ��������һ�� 0<=y<1 �����������Ҫ����0-7����������� Math.random()*8 ����
*/

var data=['�����С��a', '�ظ�', '�ϰ೤', '����', 'ΰ־����', '���ֵ�С��b'];
var timer=null;
var flag=0;	/*0��ʾ�齱δ��ʼ��1��ʾ�齱��ʼ��*/

window.onload = function(){
	var play = document.getElementById('play');
	var stop = document.getElementById('stop');
	
	//����� ��ʼ�齱
	play.onclick = playFunc;
	//����� ֹͣ�齱
	stop.onclick = stopFunc;
	
	//�ü��� ��ʼ�齱
	document.onkeyup = function(e){
		e = e || window.event;
		if (e.keyCode==13)
		{
			if (flag==0)	//flay==0˵����û����ʼ
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
	flag=1;									//�齱������
	var play = document.getElementById('play');
	var title = document.getElementById('title');
	clearInterval(timer);					//ʹ�ö�ʱ��֮ǰ�������
	timer = setInterval(function(){
		var randomResult = Math.floor(Math.random()*data.length);
		title.innerHTML = data[randomResult];
	}, 50);
	
	play.style.background = '#ccc';			//�ڳ齱ʱ�ı�"�� ʼ"��ť�ı�����ɫ
}


function stopFunc()
{
	clearInterval(timer);	//��ն�ʱ��������ֹͣ�齱
	var play = document.getElementById('play');
	play.style.background = '#036';
	flag=0;
}











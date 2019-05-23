setTimeout(function(){
	box = document.querySelector('.box');
	box.style.transform = 'scale(1)';
	box.style.transition = '.3s ease-out';
},500);

run = 0;
youchoose = 0;
boxstat = 0;
commentboxstat = 0;
function movebox(){
	box = document.querySelector('.box');
	if(boxstat==0){
		box.style.left = '400px';
		box.style.transition = '.5s';
		setTimeout(commentpop(),250);
		boxstat = 1;
	}
	else{
		commentpopout();
		if(commentboxstat == 1){
			textboxin();
			setTimeout(function(){
				commentbox.style.top = '155px';
			},50);
			commentboxstat = 0;
		}
		setTimeout(function(){
			box.style.left = '550px';
			box.style.transition = '.5s';
		},50);
		boxstat = 0;
	}
}

function commentpop(){
	commentbox = document.querySelector('.comment-box');
	commentbox.style.transform = 'scale(1)';
	commentbox.style.transition = '.3s ease-out';
}
function commentpopout(){
	commentbox = document.querySelector('.comment-box');
	commentbox.style.transform = 'scale(0)';
	commentbox.style.transition = '.3s ease-out';
}
function choosetext(){
	commentbox = document.querySelector('.comment-box');
	if(mainscript_comment == 0){
		if(commentboxstat == 0){
			commentbox.style.top = '20px';
			textboxout();
			commentboxstat = 1;
		}
		else{
			textboxin();
			setTimeout(function(){
				commentbox.style.top = '155px';
			},50);
			commentboxstat = 0;
		}
	}
}
function textboxout(){
	textbox = document.querySelector('.comment-text-box');
	textbox.style.transform = 'scale(1)';
	textbox.style.transition = '.3s ease-out'
}
function textboxin(){
	textbox = document.querySelector('.comment-text-box');
	textbox.style.transform = 'scale(0)';
	textbox.style.transition = '.3s ease-out';
}

/*ส่วนของการกด Like Dislike*/
like = 3;
dislike = 30;
likestat = 0;
disstat = 0;
function likeit(){
	if(disstat==1){
		offdislike();
		dislike -= 1;
	}
	likebutton = document.querySelector('.like');
	likebutton.style.transition = '.3s ease-out';
	if(likestat==0){
	likebutton.style.backgroundColor = 'blue';
	like += 1;
	likestat = 1;
	numtext() 
	}
	else{
	likebutton.style.backgroundColor = 'grey';
	like -= 1;
	likestat = 0;
	offnumtext()
	}
}
function dislikeit(){
	if(likestat==1){
		offlike();
		like -= 1;
	}
	disbutton = document.querySelector('.dis');
	if(disstat==0){
	disbutton.style.backgroundColor = 'red';
	dislike += 1;
	disstat = 1;
	numtext()
	}
	else{
	disbutton.style.backgroundColor = 'grey';
	dislike -= 1;
	disstat = 0;
	offnumtext()
	}
}
function offlike(){
	likebutton = document.querySelector('.like');
	likebutton.style.backgroundColor = 'grey';
	likestat = 0;
}
function offdislike(){
	disbutton = document.querySelector('.dis');
	disbutton.style.backgroundColor = 'grey';
	disstat = 0;
}
function numtext(){
	liketext = document.querySelector('.like-text');
	distext = document.querySelector('.dis-text');
	liketext.innerText = like;
	liketext.style.left = '35px';
	distext.innerText = dislike;
	distext.style.left = '120px';
}
function offnumtext(){
	liketext = document.querySelector('.like-text');
	distext = document.querySelector('.dis-text');
	liketext.innerText = 'Like';
	liketext.style.left = '22px'; 
	distext.innerText = 'Dislike';
	distext.style.left = '107px';
}
/*ส่วนการกดเห็นด้วยไม่เห็นด้วย*/
agree = 12;
nope = 75;
agree_stat = 0;
function agreeit(){
	if(agree_stat==0){
	agree += 1;
	gauge()
	document.querySelector('.nope-text').innerText = '';
	agree_stat = 1;
	pressvote = 1;
	presscomment = 0;
	blink.style.backgroundColor = 'hsl(0, 0%, 50%)'
	blink2.style.backgroundColor = 'hsl(0, 0%, 50%)'
	youchoose = 1;
	}
}
function nopeit(){
	if(agree_stat==0){
	nope += 1;
	gauge()
	document.querySelector('.agree-text').innerText = '';
	agree_stat = 1;
	pressvote = 1;
	presscomment = 0;
	blink.style.backgroundColor = 'hsl(0, 0%, 50%)'
	blink2.style.backgroundColor = 'hsl(0, 0%, 50%)'
	youchoose = 2;
	}
}
function gauge(){
	agauge = document.querySelector('.agree-gauge');
	ngauge = document.querySelector('.nope-gauge');
	astat = document.querySelector('.agree-stat');
	nstat = document.querySelector('.nope-stat');
	agauge.style.width = ((agree*100/(nope+agree))/100)*450+'px';
	agauge.style.transition = '.5s';
	ngauge.style.width = ((nope*100/(nope+agree))/100)*450+'px';
	ngauge.style.transition = '.5s';
	astat.innerText = agree;
	nstat.innerText = nope;
}
mainscript_comment = 0;
presscomment = 1;
function comment_pop(choose){
	commentbox_last = document.querySelector('.comment:nth-child(5)');
	if(mainscript_comment == 0){
		commentbox_last.style.transform = 'scale(.975)';
		commentbox_last.style.transition = '.2s'
		mainscript_comment = 1 ;
		if(choose==1)
			text = "เลื่อนเวลาเร็วกว่านี้ก็ดีนะครับ";
		else if(choose==2)
			text = "เป็นไปไม่ได้ของจารย์ เวลามันเย็นเกินไป";
		else if(choose==3)
			text = "วันอื่นไม่ได้หรอจารย์";
		else if(choose==4)
			text = "โอเคครับอาจารย์";
		textbox.style.transform = 'scale(0)';
		commentbox.style.top = '155px'
		document.querySelector('.textbox-text').innerText = "คุณเลือกตอบแล้ว";
		document.querySelector('.textbox-text').style.left = '125px';
		document.querySelector('.last-comment').innerText = text;
		document.querySelector('.com').style.backgroundColor = 'hsl(0, 0%,50%)';
		presscomment = 1;
		therun();
	}
}
	blink = document.querySelector('.blink')
	blink2 = document.querySelector('.blink2')
	i = 50;
	blink_status = 0;
	pressvote = 0;
	blinkbox = setInterval(function(){
		if(i == 80)
			blink_status = 1;
		else if(i == 50)
			blink_status = 0;

		if(blink_status == 0)
			i += 1;
		else
			i -= 1;
		if(pressvote == 0){
			blink.style.backgroundColor = 'hsl(0, 0%,'+i+'%)'
			blink2.style.backgroundColor = 'hsl(0, 0%,'+i+'%)'
		}
		if(presscomment == 0){
			document.querySelector('.com').style.backgroundColor = 'hsl(0, 0%,'+i+'%)';
		}

		
	},70)

function therun(){
	setTimeout(function() {
		if(youchoose == 0)
			agreeit()
		presscomment = 1;
		agree = 999;
		nope = 0;
		gauge();
		document.querySelector('.nope-text').innerText = '';
		document.querySelector('.agree-text').innerText = 'เห็นด้วย';
		like = 998;
		likeit()
		setTimeout(function() { document.querySelector('.comment:nth-child(5)').style.transform = 'scale(0)'},1000);
		setTimeout(function() { document.querySelector('.comment:nth-child(4)').style.transform = 'scale(0)'},1500);
		setTimeout(function() { document.querySelector('.comment:nth-child(3)').style.transform = 'scale(0)'},2000);
		setTimeout(function() { document.querySelector('.comment:nth-child(2)').style.transform = 'scale(0)'},2500);
		setTimeout(function() { document.querySelector('.comment:nth-child(1)').style.transform = 'scale(0)'},3000);
		setTimeout(function() { 
			document.querySelector('.comment:nth-child(1) > .comment-pic').style.backgroundImage = 'url("img/teacher.jpg")';
			document.querySelector('.first-comment').innerText = 'สรุปแล้วคือเปิดคลาสนะครับ'
			document.querySelector('.comment:nth-child(1)').style.transform = 'scale(1)'
		},4000);
		setTimeout(function() { 
			document.querySelector('.comment:nth-child(2) > .comment-pic').style.backgroundImage = 'url("img/teacher.jpg")';
			document.querySelector('.second-comment').innerText = 'ใครที่ไม่เห็นด้วยหมดสิทธิ์Quizเก็บคะแนนครับ'
			document.querySelector('.comment:nth-child(2)').style.transform = 'scale(1)'
		},6000);
		setTimeout(function() { 
			document.querySelector('.comment:nth-child(3) > .comment-pic').style.backgroundImage = 'url("img/teacher.jpg")';
			document.querySelector('.third-comment').innerText = 'ผมเก็บรายชื่อเมื่อกี้ไว้หมดแล้ว'
			document.querySelector('.comment:nth-child(3)').style.transform = 'scale(1)'
		},8000);
		setTimeout(function() { 
			document.querySelector('.question').style.transform = 'scale(1)'
			if(youchoose == 0||youchoose == 1){
				document.querySelector('.q-tag').innerText = 'คุณเห็นคนถูกกระทำแบบนั้นแล้ว รู้สึกอย่างไร';
				document.querySelector('.q-tag').style.left = '10%';
				document.querySelector('.q-tag').style.top = '10%';
			}
			else if(youchoose == 2){
				document.querySelector('.q-tag').innerText = 'คุณถูกกระทำแบบนี่แล้ว รู้สึกอย่างไร';
				document.querySelector('.q-tag').style.left = '17%';
				document.querySelector('.q-tag').style.top = '10%';
			}
		},13000);
	}, 5000);
}
runpage(0);
function changepage(page){
	switch(page){
		case 4:
			runpage(0);
			displaypage(4);
			runpage(4);
			break;
		case 5:
			runpage(0);
			displaypage(5);
			runpage(5);
			break;
		case 6:
			runpage(0);
			displaypage(6);
			runpage(6);
			break;
		case 7:
			runpage(0);
			displaypage(7);
			runpage(7);
			break;
		case 8:
			runpage(0);
			displaypage(8);
			runpage(8);
			break;
		case 9:
			runpage(0);
			displaypage(9);
			runpage(9);
			break;
		case 10:
			runpage(0);
			displaypage(10);
			runpage(10);
			break;
		case 11:
			runpage(0);
			displaypage(11);
			runpage(11);
			break;
		case 12:
			runpage(0);
			displaypage(12);
			runpage(12);
			break;
		case 13:
			runpage(0);
			displaypage(13);
			runpage(13);
			break;
		case 14:
			runpage(0);
			displaypage(14);
			runpage(14);
			break;
		case 15:
			runpage(0);
			displaypage(15);
			runpage(15);
			break;
		case 16:
			runpage(0);
			displaypage(16);
			runpage(16);
			break;
	}
}
function runpage(page){
	for(i=4;i<17;i++){
		if(i!=page){
			qu = ".c"+i+" > .event-box";
			document.querySelector(qu).style.zIndex = 20-i;
		}
	}
}
function displaypage(page){
	qu = ".c"+page+" > .event-box";
	document.querySelector(qu).style.zIndex = "50";
}
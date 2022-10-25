//龟兔赛跑
b=0;t=0;y=0;z=0;u=0;w=0;q=0;d=0;
gtspa=0;gtspb=0;gtspc=0;gtspd=0;
gtspe=0;gtspf=0;gtspg=0;gtsph=0;
function gtsptz(){
	gtspa=gtspa+5;
	gtspd=setInterval(function(){	
		gtspb=gtspb+gtspa;gtspc=gtspb+'px';
		gtsptzz.style.left=gtspc;
		gtspa=gtspa-0.2;
		if(gtspa<=0.1){clearInterval(gtspd);gtspa=0;}
		if(gtspb>1300){alert('兔子');clearInterval(gtspd);
		gtspa=0;gtspb=0;gtspe=0;gtspf=0;
gtspwgg.style.display = "none";
gtsptzz.style.display = "none";
gtspaa.style.display = "none";
gtspbb.style.display = "none";
gtspcc.style.display = "none";}}
	,100);}
function gtspwg(){
	gtspe=gtspe+3;
	gtsph=setInterval(function(){	
		gtspf=gtspf+gtspe;gtspg=gtspf+'px';
		gtspwgg.style.left=gtspg;
		if(gtspf>1300){alert('乌龟');clearInterval(gtsph);
		gtspa=0;gtspb=0;gtspe=0;gtspf=0;
gtspwgg.style.display = "none";
gtsptzz.style.display = "none";
gtspaa.style.display = "none";
gtspbb.style.display = "none";
gtspcc.style.display = "none";}}
	,100);}
function gtspblack(){gtspwgg.style.display = "none";
gtsptzz.style.display = "none";
gtspaa.style.display = "none";
gtspbb.style.display = "none";
gtspcc.style.display = "none";}

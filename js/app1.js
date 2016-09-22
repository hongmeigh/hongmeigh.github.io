$(function(){
	var ballcount=3;
	$(document).mousedown(function(e){
		window.pand=true;

	})
	$(document).mousemove(function(e){
		if(window.pand){
			console.log("yes")
			var x=e.pageX;
			var y=e.pageY;		
			count=count+1;
			clickbg(x,y,count,ballcount);
		}
	})
	$(document).mouseup(function(e){
		window.pand=false;
		var x=e.pageX;
		var y=e.pageY;		
		count=count+1;
		clickbg(x,y,count,ballcount);
	})
	//自动
	var x=1900; y=1000;
	setInterval(function(){
		x=1900*Math.random();
		y=1000*Math.random();
		count=count+1;
		clickbg(x,y,count,ballcount);
	},200);
})
var color=["red","yellow","green","blue","orange","purple","pink","white","gray","darkgree","lightblue"];
var r=100;
var count=0;
function clickbg(x,y,count,ballcount){
	var ballcount1=ballcount+Math.round(Math.random()*20);
	var htmlobj=[],deg=[],tasy=[],tasx=[]; 
   	var webkitStyles = '-webkit-transition' in document.documentElement.style;
   	var TRANSFORM_NAME = webkitStyles ? 'webkitTransform' : 'transform'; 
   	var rn=r*(Math.random()*2+0.2);	
	$("body").append("<div class='div"+count+"'></div>");
	for(var j=0; j<ballcount1; j++){
		var n=Math.round(Math.random()*10);
		$(".div"+count).append("<div class='"+color[n]+" circle dongh"+j+"'></div>");
	}
	$(".div"+count+" "+".circle").css({"top":y,"left":x});	
	var divcount=$(".div"+count);
	for(var i=0; i<ballcount1; i++){		
		htmlobj[i]=$(".div"+count+" "+".dongh"+i);
		deg[i]=2*Math.PI/ballcount1*i;
		tasy[i]=rn*Math.sin(deg[i]);
		tasx[i]=rn*Math.cos(deg[i]);
		setTimeout(
			function(){
				for(var n=0; n<ballcount1; n++){
					htmlobj[n][0].style[TRANSFORM_NAME]="translate("+tasx[n]+"px,"+tasy[n]+"px)";
				}
		},15)
	}
	setTimeout(function(){divcount.remove();},550)

	
	
}
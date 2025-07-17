
function Systemtime(){
var d=new Date();
var hh=d.getHours();
var mm=d.getMinutes();
var ss=d.getSeconds();
var session="AM";


if(hh==0)  //Since international time..
{
	hh=12;
}
if(hh>12)
{
	hh=hh-1;      //hh:13  then 13-12=1
	session="PM";
}
hh=(hh<10)?"0"+hh:hh;
mm=(mm<10)?"0"+mm:mm;
ss=(ss<10)?"0"+ss:ss;

 var time=console.log(hh+"-"+"mm"+"ss" "+session);
 	document.getElementById("clocky").innerText=time;
 	setTimeOut(function()
 	{

Systemtime();

 	},1000)     //1second=1000millise
}
Systemtime();
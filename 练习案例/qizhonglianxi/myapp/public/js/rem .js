function rem(){
	document.documentElement.style.fontSize=
	document.documentElement.clientWidth/6.8+"px";
}
rem();
window.onresize=rem;

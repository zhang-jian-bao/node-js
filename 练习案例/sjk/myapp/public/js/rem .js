function rem(){
	document.documentElement.style.fontSize=
	document.documentElement.clientWidth/4.8+"px";
}
rem();
window.onresize=rem;

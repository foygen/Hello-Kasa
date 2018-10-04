menu.onclick = function MyFunction(){
	var x = document.getElementById("mytopnav");
	
	if(x.className === "mytopnav") {
		x.className += "responsive";
	}
	else {
		x.className = "topnav";
	}
	
}

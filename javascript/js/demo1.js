function displayDate(){
	document.getElementById("date1").innerHTML=Date();
	document.getElementsByTagName("button")[0].innerText=Date();
	document.getElementsByTagName("button")[1].innerHTML=Date();
};
function changeImage(){
	img1=document.getElementById("img1");
	if(img1.src.match("p1")){
		img1.src="img/p2.jpg";
	}
	else{
		img1.src="img/p1.jpg";
	}
}
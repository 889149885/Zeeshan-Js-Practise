// JavaScript Document

//function myFunc(){
//	var myButtons = document.getElementsByClassName("m-div");
//	.style.backgroundColor = "red";
//}

function myFunction(myClickedBtn){
	var myButtons = document.getElementsByClassName("m-div");
	for(var i = 0; i<myButtons.length; i++){
//		alert(i);
		myButtons[i].style.backgroundColor = "deeppink";
	}
	myButtons[myClickedBtn].style.backgroundColor = "red";
}

//function myD1(){
//	var myButtons = document.getElementsByClassName("m-div");
//	myButtons[0].style.backgroundColor = "red";
//	myButtons[1].style.backgroundColor = "deeppink";
//	myButtons[2].style.backgroundColor = "deeppink";
//	myButtons[3].style.backgroundColor = "deeppink";
//	myButtons[4].style.backgroundColor = "deeppink";
//}
//
//function myD2(){
//	var myButtons = document.getElementsByClassName("m-div");
//	myButtons[1].style.backgroundColor = "red";
//	myButtons[0].style.backgroundColor = "deeppink";
//	myButtons[2].style.backgroundColor = "deeppink";
//	myButtons[3].style.backgroundColor = "deeppink";
//	myButtons[4].style.backgroundColor = "deeppink";
//}
//
//function myD3(){
//	var myButtons = document.getElementsByClassName("m-div");
//	myButtons[2].style.backgroundColor = "red";
//	myButtons[0].style.backgroundColor = "deeppink";
//	myButtons[1].style.backgroundColor = "deeppink";
//	myButtons[3].style.backgroundColor = "deeppink";
//	myButtons[4].style.backgroundColor = "deeppink";
//}
//
//function myD4(){
//	var myButtons = document.getElementsByClassName("m-div");
//	myButtons[3].style.backgroundColor = "red";
//	myButtons[1].style.backgroundColor = "deeppink";
//	myButtons[2].style.backgroundColor = "deeppink";
//	myButtons[0].style.backgroundColor = "deeppink";
//	myButtons[4].style.backgroundColor = "deeppink";
//}
//
//function myD5(){
//	var myButtons = document.getElementsByClassName("m-div");
//	myButtons[4].style.backgroundColor = "red";
//	myButtons[1].style.backgroundColor = "deeppink";
//	myButtons[2].style.backgroundColor = "deeppink";
//	myButtons[3].style.backgroundColor = "deeppink";
//	myButtons[0].style.backgroundColor = "deeppink";
//}
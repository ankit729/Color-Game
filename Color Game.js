let n;
let colors=[];
let correctColor;
let h1=document.querySelector("h1");
let colorDisplay=document.getElementById("colorDisplay");
let reset=document.getElementById("reset");
let messageDisplay=document.querySelector("#message");
let mode=document.querySelectorAll(".mode");
let squares=document.querySelectorAll(".square");
init();
function init(){
	n=9;
	resetdata();
}
reset.addEventListener("click",function(){
	resetdata();
});
for(let i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		for(let j=0;j<mode.length;j++){
			mode[j].classList.remove("selected");
		}
		this.classList.add("selected");
		n=3*(i+1);
		resetdata();
		for(let j=0;j<n;j++){
			squares[j].style.display="block";
		}
		for(let j=n;j<squares.length;j++){
			squares[j].style.display="none";
		}
	});
}
for(let i=0;i<squares.length;i++){
	squares[i].addEventListener("click",function(){
		let clickedColor=this.style.backgroundColor;
		if(clickedColor===correctColor){
			reset.textContent="Play Again?";
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
		}
		else{
			this.style.backgroundColor=document.body.style.background;
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColors(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
}
function pickColor(){
	let random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(n){
	let arr=[]
	for(let i=0;i<n;i++){
		arr[i]=randomColor();
	}
	return arr;
}
function randomColor(){
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function resetdata(){
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
	messageDisplay.textContent="";
	colors=generateRandomColors(n);
	correctColor=pickColor();
	colorDisplay.textContent=correctColor;
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
}
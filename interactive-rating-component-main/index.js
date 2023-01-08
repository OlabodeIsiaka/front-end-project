// ************************
// VARIABLES
// **********************
let star = document.querySelector(".star");
let thankYou = document.querySelector(".thank-you");
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let ratingOutput = document.querySelector(".output");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let ones = document.querySelectorAll(".one, .two, .three, .four, .five");
let submitBtn = document.querySelector(".submit");
let ratings = document.querySelector(".rating");

window.onload = function () {
	thankYou.style.display = "none";
	heading2.style.display = "none";
	para2.style.display = "none";
	ratingOutput.style.display = "none";
};

ones.forEach((one) => {
	one.addEventListener("click", function click(e) {
		ratingOutput.style.display = "block";
		e.target.style.background = 'grey'
		ratingOutput.innerHTML = `You selected ${e.target.textContent} out of 5`;
	});
	submitBtn.addEventListener("click", function (e) {
		thankYou.style.display = "block";
		heading2.style.display = "block";
		para2.style.display = "block";
		para1.style.display = "none";
		ratings.style.display = "none";
		heading1.style.display = "none";
		star.style.display = "none";
		submitBtn.style.display = "none";
	});
});
submit;

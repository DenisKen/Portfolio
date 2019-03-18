window.addEventListener("scroll", OnScroll);


function OnScroll(event) {

	verifyLabelsOnScroll();
}

function verifyLabelsOnScroll(){

	if (window.pageYOffset == 0){
		UTILS.elements.aboutMe_Arrow.style.display = "";
		UTILS.elements.aboutMe_Title.style.display = "none";
	}
	if (window.pageYOffset > 0){
		
		UTILS.elements.aboutMe_Arrow.style.display = "none";
		UTILS.elements.aboutMe_Title.style.display = "";
	}
}
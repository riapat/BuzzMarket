
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
console.log("hi");

function nextButtonClick1() {
    current_fs = document.getElementById("fs1");
    next_fs = document.getElementById("fs2");
    document.getElementById('fs1').style.display = "none";
    document.getElementById('fs2').style.display = "block";

    return false;
    
}

function prevButtonClick2() {
    current_fs = document.getElementById("fs2");
    previous_fs = document.getElementById("fs1");
    document.getElementById('fs2').style.display = "none";
    document.getElementById('fs1').style.display = "block";

    return false;
}

function nextButtonClick2(){
    current_fs = document.getElementById("fs2");
    next_fs = document.getElementById("fs3");
    document.getElementById('fs2').style.display = "none";
    document.getElementById('fs3').style.display = "block";

    return false;
}

function prevButtonClick3() {
    current_fs = document.getElementById("fs3");
    previous_fs = document.getElementById("fs2");
    document.getElementById('fs3').style.display = "none";
    document.getElementById('fs2').style.display = "block";

    return false;
}

function nextButtonClick3(){
    current_fs = document.getElementById("fs3");
    next_fs = document.getElementById("fs4");
    document.getElementById('fs3').style.display = "none";
    document.getElementById('fs4').style.display = "block";

    return false;
}

function prevButtonClick4() {
    current_fs = document.getElementById("fs4");
    previous_fs = document.getElementById("fs3");
    document.getElementById('fs4').style.display = "none";
    document.getElementById('fs3').style.display = "block";

    return false;
}

function submitButton() {
    window.location.replace("home2.html");
}


$(".previous").click(function(){
	
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
    current_fs.hide();
	
});

$(".submit").click(function(){
	return false;
})

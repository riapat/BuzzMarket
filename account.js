
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
console.log("hi");

function nextButtonClick1() {
    alert("a");
    current_fs = document.getElementById("fs1");
    alert(current_fs);
    next_fs = document.getElementById("fs2");
    document.getElementById('fs1').style.display = "none";
    document.getElementById('fs2').style.display = "block";

    return false;
    
}

function prevButtonClick() {

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

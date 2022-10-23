var name = "ByteBees";
var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex mi, nec commodo magna porta eget. Fusce vulputate consectetur arcu, eget condimentum metus ornare et. Vivamus ut mauris lectus. Phasellus vel ante eget ex luctus vulputate eget non dui. Proin quis risus rhoncus, accumsan purus vitae, blandit sapien. Nunc ut tempus tortor. Aliquam ac erat lobortis, mattis arcu consequat, facilisis felis. Sed et aliquam lectus.";
var ig = "byteBees";
var fb = "byteBees";
var tw = "byteBees";
var mail = "rhea.iyer8@gmail.com";
var phone = "(888) 888-8888";
var employee = "Rhea Iyer";
var position =  "Co-Founder";
const tags1 = ["Hospitality", "Catering"]
const tags2 = ["Finance", "Banking"]
const tags3 = ["Information Technology", "Computer Science"]


let hosp = document.getElementById("industry1");
let IT = document.getElementById("industry2");
let homeCare = document.getElementById("industry3");
let finance = document.getElementById("industry4");


let bus1 = document.getElementById("bus1");
let bus2 = document.getElementById("bus2");
let bus3 = document.getElementById("bus3");


function docWrite(variable) {
    document.write(variable);

}

function changeVis1(){
    alert("hallo");
    bus3.style.display = "none";
    if(document.getElementById("id1").checked == true){
        bus1.style.display = "none";
        bus1.style.visibility = "hidden";

        if(tags1.includes("Hospitality")){
            setToVisible(bus1);

        }
        else{
            setToHidden(bus1);
        }
        if(tags2.includes("Hospitality")){
            setToVisible(bus2)
        }
        else{
            setToHidden(bus2);
        }
        if(tags2.includes("Hospitality")){
            setToVisible(bus3)
        }
        else{
            setToHidden(bus3);
        }
        
    }
    return;
    
    

}

function setToHidden(bus){
    bus.style.visibility = "hidden";
    return;
}

function setToVisible(bus){
    bus.style.visibility = "visible";
    return;
}






// When our button gets clicked
contactUs.onclick = function () {
    alert("you clicked shit");
    
  };
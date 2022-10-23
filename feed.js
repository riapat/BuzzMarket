var name = "ByteBees";
var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex mi, nec commodo magna porta eget. Fusce vulputate consectetur arcu, eget condimentum metus ornare et. Vivamus ut mauris lectus. Phasellus vel ante eget ex luctus vulputate eget non dui. Proin quis risus rhoncus, accumsan purus vitae, blandit sapien. Nunc ut tempus tortor. Aliquam ac erat lobortis, mattis arcu consequat, facilisis felis. Sed et aliquam lectus.";
var ig = "byteBees";
var fb = "byteBees";
var tw = "byteBees";
var mail = "rhea.iyer8@gmail.com";
var phone = "(888) 888-8888";
var employee = "Rhea Iyer";
var position =  "Co-Founder";

const tags1 = ["Finance"];
const tags2 = ["Hospitality"];
const tags3 = ["Information Technology"];





function docWrite(variable) {
    document.write(variable);

}

function changeVis1(){
    let bus1 = document.getElementById("bus1");
    let bus2 = document.getElementById("bus2");
    let bus3 = document.getElementById("bus3");


    let hosp = document.getElementById("id1");
    let IT = document.getElementById("id2");
    let finance = document.getElementById("id3");
    let other = document.getElementById("id4");

    if(document.getElementById("id1").checked == true){
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
        if(tags3.includes("Hospitality")){
            setToVisible(bus3)
        }
        else{
            setToHidden(bus3);
        }
        
    }
    else if(IT.checked == true){
        if(tags1.includes("Information Technology")){
            setToVisible(bus1);

        }
        else{
            setToHidden(bus1);
        }
        if(tags2.includes("Information Technology")){
            setToVisible(bus2)
        }
        else{
            setToHidden(bus2);
        }
        if(tags3.includes("Information Technology")){
            setToVisible(bus3)
        }
        else{
            setToHidden(bus3);
        }
        
    }
    else if(finance.checked == true){
        if(tags1.includes("Finance")){
            setToVisible(bus1);

        }
        else{
            setToHidden(bus1);
        }
        if(tags2.includes("Finance")){
            setToVisible(bus2)
        }
        else{
            setToHidden(bus2);
        }
        if(tags3.includes("Finance")){
            setToVisible(bus3)
        }
        else{
            setToHidden(bus3);
        }
        
    }
    else{
        setToVisible(bus1);
        setToVisible(bus2);
        setToVisible(bus3);
    }
    
    
    

}

function setToHidden(bus){
    bus.style.display = "none";
    return;
}

function setToVisible(bus){
    bus.style.display = "block";
    return;
}






// When our button gets clicked
contactUs.onclick = function () {
    alert("you clicked shit");
    
  };
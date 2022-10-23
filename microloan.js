const fs = require("fs");
const { parse } = require("csv-parse");
const { match } = require("assert");

var csvConvert = new Array(7);
var index = 0;
fs.createReadStream("hackgt 9 micro-loans data - Sheet1.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        console.log(row);
        csvConvert[index]=row;
        index++;
         
    })
    
    .on("error", function (error) {
    console.log(error.message);
    })
    .on("end", function () {
    console.log("finished");
    console.log(csvConvert);
    
    

});
console.log(csvConvert);
function submitButton() {
    let need = parseInt(document.getElementById('money').value);
    console.log(need);
    var matches = "";
    var matchCount = 0;
    for (var x = 0; x<7; x++) {
        if(parseInt(csvConvert[x][4])>= need) {
            matchCount++;
            matches += "You have matched with " + csvConvert[x][0] + "!\n";
        }
    }
    if(matchCount>0) {
        matches += "\nYou have " + matchCount + " nonprofit matches! Look for more information on their websites.";
    }
    else {
        matches = "Unfortunately, you have no nonprofit matches from our database. Consider reducing your request size."
    }
    
    var result = document.getElementById('result');
    result.value = matches;
    console.log(matches);

    return false
}

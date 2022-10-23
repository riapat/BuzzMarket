let data = [
    ["Womens Microfinance Initiative (WMI)",0.98,9000000,0.1,175],
    ["Building Resources Across Communities",0.98,1900000000,0.0391,850],
    ["Zidisha (person to person)",0.97,16000000,0.10,250],
    ["Grameen Bank ",0.98,250000000000,0.165,2700],
    ["Kiva",0.964,1700000000,0,5573],
    ['Micro Loan Foundation USA', 0.97, 74600000,0.12,20000],
    ["Small Business Administration Micro loan Program",74000000,0.065,16557]
];
function submitButton() {
    let need = document.getElementById('money').value;
    console.log(need);
    var matches = "";
    var matchCount = 0;
    for (var x = 0; x<7; x++) {
        if(data[x][4]>= need) {
            matchCount++;
            matches += "You have matched with " + data[x][0] + "!\n";
        }
    }
    if(matchCount>0) {
        matches += "\nYou have " + matchCount + " nonprofit matches! Look for more information on their websites.";
    }
    else {
        matches = "Unfortunately, you have no nonprofit matches from our database. Consider reducing your request size."
    }
    
    var result = document.getElementById("result");
    result.value = matches;
    console.log(matches);

    return false
}

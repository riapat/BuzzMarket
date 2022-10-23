const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        console.log(event.target.result);
        const text = e.target.result;
        document.write(text);
    };

    reader.readAsText(input);
});
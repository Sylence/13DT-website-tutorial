function changeHTML(){
    var text = document.getElementById("firstName").value;
    
    
    
    var number = Number(document.getElementById("theNumber").value);
    // test that the number is between 10 and 30
    if (number < 10 || number > 30) {
        alert("OI! Idiot! Put a number between 10 and 30. GOSH!");
        return;
    }
    
    document.getElementById("changeMe").innerHTML = number + number;
}

function toggleText() {
    $("p").toggle(1000);
}

function addParagraph() {
    $("#firstLine").append("<p>Hello, I'm a new P tag! :D XD</p>");
}



function addThings() {
    $("#box").append("<p>Hello! I am a P tag! :D XD</p>")
}



// Uses Jquery to iterate over the items of a list and print each
// to the console
function printList() {
    $("li").each(function (index) {
        console.log(index + ": " + $(this).text());
    });
}

// Run code when document is ready
$(document).ready(function () {
    console.log("ready!");
    $("#header").load("https://raw.githubusercontent.com/Sylence/13DT-website-tutorial/main/header.html");
});





























var postcodeSec = document.getElementById("enter-sec");
var newSec = document.getElementById("new-sec");
var greatNews = document.getElementById("great-news");
var ouchNews = document.getElementById("ouch-news");

var postcodeArray = ["52200", "47820", "47830", "40160", "47810", "40460", "40000", "40150", "40400", "40200", "40300", "60000", "58200", "47120", "47301", "47300", "47100", "93050", "93250", "93350", "93100", "93300", "93150", "93400", "93200", "93000", "88300", "88200", "88000", "88600", "88400", "88100", "88675"];

function findArea(){
    var textValue = $("#postcode-input").val().toString();
    
    if (textValue === "") {
        window.alert("Please enter an input!");
    } else if (postcodeArray.includes(textValue)) {  
        postcodeSec.style.display = "none";
        newSec.style.display = "block";
        greatNews.style.display = "block";
    } else {
        postcodeSec.style.display = "none";
        newSec.style.display = "block";
        ouchNews.style.display = "block";
    }
}

function tryAnother() {
    newSec.style.display = "none";
    ouchNews.style.display = "none";
    greatNews.style.display = "none";
    postcodeSec.style.display = "block";
}
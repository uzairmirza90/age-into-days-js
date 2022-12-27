function clickMe(){
    var birthYear = prompt("In which year you were born?");
    var ageInDays = (2018 - birthYear) * 365;
    var days = document.getElementById("result").innerHTML="You are " + ageInDays + " days old";
    console.log(ageInDays);
}

function reset(){
    var resetDays = document.getElementById("result").remove();
    console.log(resetDays);
}
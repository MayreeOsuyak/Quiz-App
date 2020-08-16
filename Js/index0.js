let name = prompt("What is your name?")

document.getElementById("welcome").innerHTML="Welcome" + " " + name + "!";


function button(){
    document.getElementById("cover").style.display="block";
    document.getElementById("welcome").style.display="none";
}
function exit(){
    document.getElementById("cover").style.display="none";
    document.getElementById("over").innerHTML="Have a nice day" + " " + name + "!";
}
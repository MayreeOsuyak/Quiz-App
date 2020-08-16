let passed;
let failed;
let Total;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;

function analyse(){
   passed = Number(a+c+e+g+i);
   failed = Number(b+d+f+h+j);
   Total = Number(a+c+e+g+i)*20;
   document.getElementById("incorrect").innerHTML = "Number of questions failed: " + failed;
   document.getElementById("correct").innerHTML = "Number of questions passed: "  + passed;
   document.getElementById("total").innerHTML = "Total Score: " + Total + "%" ;
}


function play(){
    let put
    put = document.getElementById("a").checked;

    if (put == true){
        document.getElementById("h1").innerHTML="&#10004Correct!!"
        document.getElementById("h1").style.color="green"
        a = 1;
    }
    else{
        document.getElementById("h1").innerHTML="&#10060Incorrect!!"
        document.getElementById("h1").style.color="red"
        b = 1; 
    }
}
function play1(){
    let put
    put = document.getElementById("b3").checked;

    if (put == true){
        document.getElementById("h2").innerHTML="&#10004Correct!!"
        document.getElementById("h2").style.color="green"
        c = 1;
    }
    else{
        document.getElementById("h2").innerHTML="&#10060Incorrect!!"
        document.getElementById("h2").style.color="red" 
        d = 1;
    }
}
function play2(){
    let put
    put = document.getElementById("c1").checked;

    if (put == true){
        document.getElementById("h3").innerHTML="&#10004Correct!!"
        document.getElementById("h3").style.color="green"
        e = 1;
    }
    else{
        document.getElementById("h3").innerHTML="&#10060Incorrect!!"
        document.getElementById("h3").style.color="red" 
        f = 1;
    }
}
function play3(){
    let put
    put = document.getElementById("d3").checked;

    if (put == true){
        document.getElementById("h4").innerHTML="&#10004Correct!!"
        document.getElementById("h4").style.color="green"
        g = 1;
    }
    else{
        document.getElementById("h4").innerHTML="&#10060Incorrect!!"
        document.getElementById("h4").style.color="red" 
        h = 1;
    }
}
function play4(){
    let put
    put = document.getElementById("e").checked;

    if (put == true){
        document.getElementById("h5").innerHTML="&#10004Correct!!"
        document.getElementById("h5").style.color="green"
        i = 1;
    }
    else{
        document.getElementById("h5").innerHTML="&#10060Incorrect!!"
        document.getElementById("h5").style.color="red" 
        j = 1;
    }
}



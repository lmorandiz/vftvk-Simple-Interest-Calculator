function compute()
{
    p = document.getElementById("principal").value;
}

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = new Date().getFullYear()+parseInt(years);
var interest=principal*years*rate/100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate_val;
}  

function pulsar() {
alert("document.getElementById("result").innerHTML="
If you deposit "+principal+",\<br\>
at an interest rate of "+rate+"%\<br\>
You will receive an amount of "interest.value",\<br\>
in the year "+year+"\<br\>");
}
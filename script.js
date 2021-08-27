function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    //Check for positive values
    if (amount <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML="If you deposit "
            +"<span class=\"result\">" +principal + "</span>"+",\<br\>at an interest rate of "
            +"<span class=\"result\">" +rate + "%</span>"+"\<br\>You will receive an amount of "
            +"<span class=\"result\">" +amount + "</span>"+",\<br\>in the year "
            +"<span class=\"result\">" +year + "</span>"+"\<br\>"
    }
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}
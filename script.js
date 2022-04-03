function compute()
{

    // Get the values from the form
    var principalField = document.getElementById("principal");

    principal = principalField.value;

    if (principal <= 0) {
        alert("Enter a positive number");
        principalField.focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculate the interest
    var interest = principal * years * rate / 100;

    // Calculate end year based on current date and input
    var now = new Date()
    var end_year = now.getFullYear() + Number(years);

    // Sets the result text
    document.getElementById("result").innerHTML = 
        "<div>" +
        "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "%</mark>. <br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + end_year + "</mark>." +
        "</div>";        

}

function show_rate_value() {

    var rate = document.getElementById("rate").value;

    document.getElementById("rangeval").innerHTML = rate + "%";

}
calculate = () => {

    //getting values of numbers and operator
    var num1 = parseInt(document.getElementsByName("num1")[0].value);
    var num2 =  parseInt(document.getElementsByName("num2")[0].value);
    var operator = document.getElementsByName("operator");
    //checking empty values
    if (num1 == "") {
        document.getElementById('number1').innerHTML = "Please enter first number";
        document.getElementById('number1').setAttribute("style","visibility: visible");
    }
    if (num2 == "") {
        document.getElementById('number2').innerHTML = "Please enter second number";
        document.getElementById('number2').setAttribute("style","visibility: visible");
    }
    //checking number
    if (isNaN(num1)) {
        document.getElementById('number1').innerHTML = "Please enter only numeric value for first number";
        document.getElementById('number1').setAttribute("style","visibility: visible");
    }
    if (isNaN(num2)) {
        document.getElementById('number2').innerHTML = "Please enter only numeric value for second number";
        document.getElementById('number2').setAttribute("style","visibility: visible");
    }
    //checking operator is checked or not
    var count = 0;
    for (var j = 0; j < operator.length; j++) {
        if (operator[j].checked == false)
         { count++; }
    }
    if (count == operator.length) {
        document.getElementById("operator_msg").innerHTML = "Please select the operation you want to perform";
        document.getElementById('operator_msg').setAttribute("style","visibility: visible");
    }

    //performing operation
    else{
        for (var i = 0; i < operator.length; i++) {
            if (operator[i].checked == true) {
                var operation = operator[i].value;
            }
        }
    
        if (operation == "+") {
            document.getElementById('msg').innerHTML = num1 + num2;
        }
        else if (operation == "-") {
            document.getElementById('msg').innerHTML = num1 - num2;
        }
        else if (operation == "*") {
            document.getElementById('msg').innerHTML = num2 * num1;
        }
        else {
            document.getElementById('msg').innerHTML = num1 / num2;
        }
    }
    
    
}

//erassing error message
erase = () => {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    var operator = document.getElementsByName("operator");
    for (var j = 0; j < operator.length; j++) {
        document.getElementById(operator[j].id).checked = false;
    }
}

change = () =>{
    document.getElementById('number1').setAttribute("style","visibility: hidden");
    document.getElementById('number2').setAttribute("style","visibility: hidden");
    document.getElementById('operator_msg').setAttribute("style","visibility: hidden");
}
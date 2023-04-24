// arrow function
checknumber = () => {
    
  //fetching value from from
    var value = document.getElementById('text').value;

    //if null value 
     if (value === "") {
        document.getElementById("paragraph").innerHTML = "Please enter any numeric value";
    }

    //if not null value
    for (let i = 0; i < value.length; i++) {
        var char = value.charCodeAt(i);
        //if value is int
        if (char >= 48 && char <= 57 ) {
            document.getElementById("paragraph").innerHTML = "Entered value is a numeric value";
            continue ;
        }
        //if value is other then int
        else{
            document.getElementById("paragraph").innerHTML = "Only numeric values are allowed. Please re-enter the value";
            break;
        }
    }
}

// What is the ASCII value of 1 to 9? 48-57
// It can be observed that ASCII value of digits [0 – 9] ranges from [48 – 57].
//The ASCII value of the lowercase alphabet is from 97 to 122. And, the ASCII value of the uppercase alphabet is from 65 to 90

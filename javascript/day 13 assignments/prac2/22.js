
checknumber = () => {
    
  //fetching value from from
    var value = document.getElementById('text').value;
    if (value == ""){
        document.getElementById("paragraph").innerHTML="Please enter any numeric value";
    }
    else if(isFinite(value) )
    {

        document.getElementById("paragraph").innerHTML="numeric value";
    }

    else 
    {
        document.getElementById("paragraph").innerHTML=" not numeric value";

    }
}



// What is the ASCII value of 1 to 9?
// It can be observed that ASCII value of digits [0 – 9] ranges from [48 – 57].
//The ASCII value of the lowercase alphabet is from 97 to 122. And, the ASCII value of the uppercase alphabet is from 65 to 90


checknumber = () => {
    var value = document.getElementById('text').value;
    if(value.length == 0)
    {
        document.getElementById("paragraph").innerHTML="Please enter any numeric value"
    }
    
    else if(isNaN(value))
    {
        document.getElementById("paragraph").innerHTML="Only numeric values are allowed. Please re-enter the value";
    }
    else 
    {
        document.getElementById("paragraph").innerHTML="Entered value is a numeric value";
    }
}
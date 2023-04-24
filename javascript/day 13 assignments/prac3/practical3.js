checknumber = () =>{
  //fetching value from from
    var Fname = document.getElementById('Fname').value;
    var Lname = document.getElementById('Lname').value;
    //showing submitted data via alert box
    if(Fname == ""){
      alert ("enter first name properly");
    }
    else if(Lname == ""){
      alert ("enter Last Name properly");
    }
    else{
      alert("you have submitted the form \n hello!! \n "+Fname+" "+Lname);
    }
}
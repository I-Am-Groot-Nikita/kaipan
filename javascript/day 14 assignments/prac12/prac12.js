

display = () =>{
    var box = select_box.dialog_box;
    // printing all values when please select is selected
    if(box.selectedIndex == 0 ){
        var options = "";
        for (var i = 1; i < box.length; i++) {
               options = options + box.options[i].value + "<br> " ;
            }
            document.getElementById("display").innerHTML = options;
     }

    //else only one value is selected
     else{

        document.getElementById("display").innerHTML = box[box.selectedIndex].value;
     }
   
}


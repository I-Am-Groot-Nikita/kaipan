display = () =>{
    var technology = document.getElementsByName("radio");
    //checking which value is checked 
    for(var i=0; i<technology.length;i++){
        if(technology[i].checked == true){
            //printing thechecked value in span having id print
            document.getElementById("print").innerHTML = technology[i].value ;
        }
     }

}
//this is for checking button if label is click
select = (id) =>{
    var node = document.getElementById(id);
    if(node.parentNode.firstChild.checked == false){
        node.parentNode.firstChild.checked = true;
    }
    else{node.parentNode.firstChild.checked = false}
    node.parentNode.firstChild.onclick = display();
}
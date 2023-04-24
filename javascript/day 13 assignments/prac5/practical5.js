display = () =>{
    var technology = document.getElementsByName("radio");
    //this for multiple span
    var style = document.getElementsByName("spans");
    //checking which value is checked 
    for(var i=0; i<technology.length;i++){
        if(technology[i].checked == true){
            //printing thechecked value in span having id print
            document.getElementById(style[i].id).innerHTML = technology[i].value;
        }
        else
        {
            //print null if unchecked 
            //this will help to disappear span of radio button which is not choosed
            document.getElementById(style[i].id).innerHTML =" ";
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

    var checkall = document.getElementsByName("checkall")[0];
    var checkme = document.getElementsByName("checkme");


checkAll = () => {
    if (checkall.checked == true) {
        for (var i = 0; i < checkme.length; i++) {
            checkme[i].checked = true;
        }
    }
    else {
        for (var i = 0; i < checkme.length; i++) {
            checkme[i].checked = false;
        }
    }
}
uncheck = () => {
    var count = 0;
        //count of the child who are unchecked
        for (i = 0; i < checkme.length; i++) {
            if (checkme[i].checked == false) {
                count++;
            }
        }
        //if any one value of child node is unchecked then uncheck parent
        if (count > 0) {
            checkall.checked = false;
        }
        //if all value of child node is checked then check parent value
        if (count == 0) {
            checkall.checked = true;
        }
        
}
//this is for checking button if label is click
check = (id) =>{
    var node=document.getElementById(id);
    if(node.parentNode.firstChild.checked == false){
        node.parentNode.firstChild.checked = true;
    }
    else{
        node.parentNode.firstChild.checked = false;
    }
    node.parentNode.firstChild.onclick = uncheck();
}
//this is for checking button if label is click
checkALL = (id) =>{
    var node=document.getElementById(id);
    if(node.parentNode.firstChild.checked == false){
        node.parentNode.firstChild.checked = true;
    }
    else{
        node.parentNode.firstChild.checked = false;
    }
    node.parentNode.firstChild.onclick = checkAll();
}

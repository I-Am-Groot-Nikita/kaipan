add_a_contact = () => {

    //create node
    const node = document.createElement("div");
    node.setAttribute("style", "margin:5px;")
    node.setAttribute("id", increment());

    //create new element insidde that node 
    const txtbox = document.createElement('input');
    txtbox.setAttribute("type", "text");
    txtbox.setAttribute("style", "height:20px;width:150px;border-radius: 10px;border: 1px solid black;background-color:rgb(255,255,255,0.5);");
    node.appendChild(txtbox);

    //create other element inside that node
    const btn = document.createElement('input');
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "x");
    btn.setAttribute("onclick", "cancel(" + n + ")");
    btn.setAttribute("style", "border: none;color: red; font-weight: bolder;background: transparent;")
    node.appendChild(btn);
    //append the node under parent node
    document.getElementById("contacts").appendChild(node);

}


//code to remove node 
cancel = (id) => {
    var element = document.getElementById(id);
    var parent = document.getElementById("contacts");
    // console.log(element);
    parent.removeChild(element);
}


//auto-increment for id
let n = 0;
const increment = () => {
    return ++n;
}
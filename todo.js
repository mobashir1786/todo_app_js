const addListMenu = document.getElementById("add_list");
const blur = document.getElementById("upper");
const lower = document.getElementById("lower");
const parentCard= document.getElementById("cardParent");

function popup() {

    addListMenu.style.display = "flex";

    blur.style.filter = "blur(5px)";

    lower.style.display = "none";

    parentCard.style.filter="blur(5px)";
}

const addList = [];
function add() {
    addListMenu.style.display = "none";
    blur.style.filter = "blur(0px)";
    parentCard.style.filter="blur(0px)";
    const listName = document.getElementById("inp").value;
    const tempObject = {
        id: Date.now(),
        taskName: listName
    }
    addList.push(tempObject);
    document.getElementById("inp").value = "";
    // console.log(addList);
    addTaskOnScreen();
}
function addTaskOnScreen() {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${addList[addList.length - 1].id}`);
    const cardInsideDiv = document.getElementById("cardParent");
    cardInsideDiv.appendChild(card);

    const innertxt = document.getElementById(`${addList[addList.length - 1].id}`);
    innertxt.innerHTML = `<div class="text" id="text">${addList[addList.length - 1].taskName}</div>
    <hr>
    <div id="workList_${addList[addList.length - 1].id}"></div>
    <div class="buttons">
        <button class=" add1 material-icons" onclick="popup1(${addList[addList.length - 1].id})">add</button>
        <button class=" delete material-icons" onclick="deleteCard(${addList[addList.length - 1].id})">delete</button>
    </div>`;


}
function closepopup() {
    addListMenu.style.display = "none";
    blur.style.filter = "blur(0px)";
    parentCard.style.filter="blur(0px)";
}


const item=document.getElementById("add_item");
let addWork=[];
function addNewItem(id) {
    const text1 = document.getElementById("inp1").value;
    console.log(text1);
    const tempobj1 = {
        id: Date.now(),
        work1: text1
    }
    addWork.push(tempobj1);
    document.getElementById("inp1").value = "";
    console.log(addWork);
    add1(id);
    item.style.display="none";
}
function add1(id) {
    const creatediv = document.createElement("div");
    creatediv.setAttribute("class", "workName");
    creatediv.setAttribute("id", `${addWork[addWork.length - 1].id}`);
    
    const workListInDiv = document.getElementById(`workList_${id}`);
    workListInDiv.appendChild(creatediv);
    const innertxt1 = document.getElementById(`${addWork[addWork.length - 1].id}`);
    innertxt1.innerHTML = `<span class="itemindiv" id="span_${Date.now()}">${addWork[addWork.length - 1].work1}</span><button class="markbtn" onclick="markasdone('span_${Date.now()}',this)">Mark Completed</button>`

    
}


function deleteCard(id) {
    document.getElementById(id).style.display = "none";

}

function popup1(id) {
    parentCard.style.filter="blur(5px)";
    let btn = document.getElementById("addNewItem_id");
    btn.setAttribute("onclick", `addNewItem(${id})`);
    item.style.display="flex";
    parentCard.style.filter="blur(0px)";
}
function markasdone(id,a){
    console.log(a);
    a.style.display="none";
    let span = document.getElementById(id);
    span.style.textDecoration = "line-through";
}
function closepopup1(){
    item.style.display="none";
}
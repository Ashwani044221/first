let searchinput = document.getElementById("inputbtn");
let addbtn = document.getElementById("addbtn");
let listcontainer = document.getElementById("listcontainer");

addbtn.addEventListener("click", () => {
    addtask();
});

function addtask() {
    
    let task = searchinput.value.trim();

    if (task === "") {
        alert("Enter a task");
    } else {
        let li = document.createElement("li"); // create li
        li.innerHTML = task; // add task text

        // add edit and delete buttons inside li
        eventeditdel(li);

        // append li to ul
        listcontainer.appendChild(li);

        // clear input
        searchinput.value = "";
    }
    savedata();
}

function eventeditdel(list) {
    // create delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "\u00d7"; // × symbol
    list.appendChild(deleteBtn);

    // create edit button
    let editBtn = document.createElement("span");
    editBtn.className = "edit";
    editBtn.innerHTML = "✏️";
    list.appendChild(editBtn);
}
listcontainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        savedata()
    }else if( e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    }  else if (e.target.classList.contains("edit")) {
        searchinput.value = e.target.parentElement.firstChild.textContent; // load text to input
        e.target.parentElement.remove(); // remove old li for editing
        savedata()
    }
       
})

function savedata(){
    localStorage.setItem("task",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML =localStorage.getItem("task");
}
showtask();
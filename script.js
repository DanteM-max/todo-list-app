console.log("script started!");
//add a task
function addTask() {
    console.log("Button clicked! Processing...");
    /*
        <div id="task2" class="task-item">
            <input type="checkbox" id="checkbox2">
            <label id="label2" for="checkbox2">Webster!</label>
        </div>
    */

    //Get task text!
    const textbox = document.getElementById("task-input");
    let taskText = textbox.value;
    if (taskText == "") {
        alert("Tasks cannot be empty!");
    } else {
        textbox.value = "";
        createTask(taskText);
    }
        
}

function removeTask(event) {
        console.log("Removing task!");
        console.log(event.target.id);
        let parentID = "task" + event.target.id.substring(8);
        console.log("New ID: " + parentID);
        let taskList = document.getElementById("task-list");
        let taskDiv = document.getElementById(parentID);
        taskDiv.classList.add("remove");
        //
        setTimeout(function() {
            taskList.removeChild(taskDiv);
            fixTaskColors();
        }, 1000);
        console.log("Removed element!");
        
}

function fixTaskColors() {
    let taskList = document.getElementById("task-list");
    for (let i = 0; i < taskList.childElementCount; i++) {
        if (i % 2 == 0) {
            taskList.children[i].style.backgroundColor = "steelBlue";
        } else {
            taskList.children[i].style.backgroundColor = "darkblue";
        }
    }
}

function createTask(taskText) {
    //get taskList
    let taskList = document.getElementById("task-list");

    //make task div
    let taskDiv = document.createElement("div");
    let idNum = taskList.childElementCount;
    taskDiv.id = "task" + idNum;
    if (idNum % 2 == 0) {
        taskDiv.style.backgroundColor = "steelBlue";
    } else {
        taskDiv.style.backgroundColor = "darkblue";
    }
    taskDiv.classList.add("task-item");

    //make input (checkbox)
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + idNum;
    checkbox.addEventListener("change", removeTask);

    //make label
    let label = document.createElement("label");
    label.id = "label" + idNum;

    //set label text to user's input
    label.innerText = taskText;
    localStorage.setItem(taskDiv.id, taskText);
    console.log(localStorage.length);

    //append new elements (checkbox to task) (label to task) (task to list)
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskList.appendChild(taskDiv);
    console.log("Code complete! Task name is " + label.innerText);
}

function loadTasks() {
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(key);
        let taskText = localStorage.getItem(key);
        createTask(taskText);
        console.log(taskText);
    }
}
loadTasks();
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
    }
    textbox.value = "";

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

    //make label
    let label = document.createElement("label");
    label.id = "label" + idNum;

    //set label text to user's input
    label.innerText = taskText;

    //append new elements (checkbox to task) (label to task) (task to list)
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskList.appendChild(taskDiv);
    console.log("Code complete!");
}
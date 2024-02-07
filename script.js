function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let task = document.createElement("li");
        
        task.innerHTML = 
        `<input type="checkbox" onclick="toggleTask(this)">
        ${taskInput.value}<i><sub> от </sub></i>
        <button class="delete" onclick="deleteTask(this)">❌</button>`;

        taskList.appendChild(task);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    let task = checkbox.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(deleteBtn) {
    let task = deleteBtn.parentElement;
    task.remove();
}

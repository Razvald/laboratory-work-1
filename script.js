function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let task = document.createElement("li");
        
        task.innerHTML = 
        `<button class="complete" onclick="toggleTask(this)">✓</button>
        <span class="task-text">${taskInput.value}</span>
        <span class="task-date"><sub> от ${date_time()}</sub></span>
        <button class="delete" onclick="delCurTask(this)">✖️</button>`;

        taskList.appendChild(task);
        taskInput.value = "";
    }
}

function toggleTask(completeBtn) {
    let task = completeBtn.parentElement;
    task.classList.toggle("completed");
}

function delCurTask(deleteBtn) {
    let task = deleteBtn.parentElement;
    task.remove();
}

function delAllTask(){
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";
}

/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();

    return day+"."+month+"."+year;
}

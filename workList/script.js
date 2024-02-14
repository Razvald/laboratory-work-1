function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let task = document.createElement("li");

        task.innerHTML =
            `<div>
                <button class="complete" onclick="toggleTask(this)"></button>
            </div>
            <div class="task-details">
                <div class="task-text">${taskInput.value}</div>
                <div class="task-date"><sub>от ${date_time()}</sub></div>
            </div>
            <div>
                <button class="delete" onclick="delCurTask(this)"></button>
            </div>`;

        taskList.appendChild(task);
        taskInput.value = "";
    }
}

function toggleTask(button) {
    // Находим родительский элемент кнопки (li)
    var listItem = button.closest('li');

    // Применяем класс completed-bg для изменения цвета фона
    listItem.classList.toggle('completed-bg');

    // Находим элемент с текстом задачи в данной задаче
    var taskText = listItem.querySelector('.task-text');

    // Переключаем класс completed для текста задачи
    taskText.classList.toggle('completed');

}

function delCurTask(button) {
    let task = button.parentElement;
    task.remove();
}

function delAllTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();

    return day + "." + month + "." + year;
}
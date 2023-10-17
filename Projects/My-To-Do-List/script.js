   // JavaScript code
   function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = ""; // Clear the input field
    }
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
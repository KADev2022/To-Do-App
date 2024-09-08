/* 
Function to create a task element
*/
function createTaskElement(taskText: string) {
    // Create the elements
    const li = document.createElement("li");
    const taskTextElement = document.createElement("span");

    // Set the text content
    taskTextElement.textContent = taskText;

    // Create an edit button and add functionality
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", () => {
        const newText = prompt("Edit the Task", taskText);

        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    });

    // Create a delete button and add functionality
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    // Append the child elements of the li element
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

/* 
Function to click the add button
*/
function addTask() {
    // Get the task input element and trim the value of the task input
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const taskText = taskInput.value.trim();

    // Return nothing if the task input has no value entered
    if (taskText === "") {
        return;
    }

    // Get the task list element and create a task element for calling the createTaskElement function
    const taskList = document.getElementById("taskList") as HTMLUListElement;
    const taskElement = createTaskElement(taskText);

    // Append the child element the of task list element
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";
}

/*
Add an event listener to automatically add content after clicking the add button
*/
document.addEventListener("DOMContentLoaded", function () {
    // Get the add button element
    const addButton = document.getElementById("addButton");

    // If the add button is clicked, then the task is added
    if (addButton) {
        addButton.addEventListener("click", addTask);
    }
});
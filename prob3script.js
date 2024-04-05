const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDetails = document.getElementById("taskDetails").value;
    addTask(taskTitle, taskDetails);
    taskForm.reset();
});

function addTask(title, details) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${title}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <form class="edit-form">
            <input type="text" value="${title}" required>
            <input type="text" value="${details}">
            <button type="submit">Save</button>
        </form>
    `;
    taskList.appendChild(li);

    const editButton = li.querySelector(".edit-btn");
    const deleteButton = li.querySelector(".delete-btn");
    const editForm = li.querySelector(".edit-form");

    editButton.addEventListener("click", function() {
        editForm.style.display = "block";
        li.style.display = "none";
    });

    editForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let newTitle = editForm.querySelector("input[type='text']").value;
        let newDetails = editForm.querySelectorAll("input[type='text']")[1].value;
        li.querySelector("span").textContent = newTitle;
        li.style.display = "block";
        editForm.style.display = "none";
    });

    deleteButton.addEventListener("click", function() {
        li.remove();
    });
}

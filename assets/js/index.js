let tasks = document.querySelector("#taskmaster");
let taskInput = document.querySelector("#tasks");
let btnAgregar = document.querySelector("#btn");
let total = document.querySelector("#total");
let completed = document.querySelector("#completed");
let tasklist = [
    { id: 1, nombre: "Lavar la ropa" },
    { id: 2, nombre: "Pasear al perro" },
    { id: 3, nombre: "Comprar en el supermercado" }
];
let taskIdCounter = 4;

btnAgregar.addEventListener("click", () => {
    let newTask = { id: taskIdCounter++, nombre: taskInput.value };
    tasklist.push(newTask);
    taskInput.value = "";
    renderTasklist();
});

function borrar(id) {
    let index = tasklist.findIndex((element) => element.id == id);
    if (index !== -1) {
        tasklist.splice(index, 1);
        renderTasklist();
    }
}

function updateCompletedCount() {
    let checkedCheckboxes = document.querySelectorAll("#task-checkbox:checked");
    let completedCount = checkedCheckboxes.length;
    completed.innerHTML = completedCount;
    total.innerHTML = tasklist.length;
}

function renderTasklist() {
    let html = "";
    for (let i = 0; i < tasklist.length; i++) {
        let task = tasklist[i];
        html += `<li>${i + 1}. ID:(${task.id}) ${task.nombre} <input id="task-checkbox" type="checkbox"/> <button id="x" onclick="borrar(${task.id})"> X</button></li>`;
    }
    tasks.innerHTML = html;

    let checkboxes = document.querySelectorAll("#task-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            updateCompletedCount();
        });
    });

    updateCompletedCount();
}

renderTasklist();






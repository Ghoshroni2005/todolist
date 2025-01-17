const results = document.getElementById("results");
const todoCount = document.getElementById("todo-count");
const todos = []
todoCount.textContent = 0
const addTodo = (event) => {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const todoValue = todoInput.value;
    
    if (todoValue === "") {
        return alert("Please enter todo")
    }
    
    const newTodo = {
        id: Date.now(),
        value: todoValue
    };
    todos.push(newTodo);
    const newTodoElement = document.createElement("li");
    newTodoElement.classList.add("list-group-item", "mt-2", "d-flex", "justify-content-between", "align-items-center");
    newTodoElement.textContent = todoValue;

    results.appendChild(newTodoElement);
    todoCount.textContent = todos.length
    todoInput.value = "";


    // add delete functionality
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-success", "text-decoration-none");
    deleteButton.textContent = "Done";
    deleteButton.addEventListener("click", () => {
        const index = todos.findIndex(todo => todo.id === newTodo.id);
        if (index > -1) {
            todos.splice(index, 1);
        }
        results.removeChild(newTodoElement);
        todoCount.textContent = todos.length
    });
    newTodoElement.appendChild(deleteButton);
}
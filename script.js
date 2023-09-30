
document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load todos from localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <span class="remove-button">X</span>
        `;

        todoList.appendChild(todoItem);

        // Save the new todo in the todos array
        todos.push({ text: todoText, completed: false });
        saveTodos();
    }

    function markTodoCompleted(todoItem, index) {
        todoItem.classList.add('completed');
        todos[index].completed = true;
        saveTodos();
    }

    function removeTodoItem(todoItem, index) {
        todoList.removeChild(todoItem);
        todos.splice(index, 1);
        saveTodos();
    }

    todos.forEach(function(todo, index) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <span class="remove-button">X</span>
        `;

        todoList.appendChild(todoItem);

        // Add event listeners for marking as completed and removing todos
        const todoText = todoItem.querySelector('.todo-text');
        const removeButton = todoItem.querySelector('.remove-button');

        todoText.addEventListener('click', function() {
            if (!todo.completed) {
                markTodoCompleted(todoItem, index);
            }
        });

        removeButton.addEventListener('click', function() {
            removeTodoItem(todoItem, index);
        });
    });

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });
});

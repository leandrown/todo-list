let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');

        let pos = todos.indexOf(todo);
        
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

        linkElement.appendChild(linkText);
    }
}

function saveToStorage() {
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

function addTodo() {
    let todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    
    renderTodos();
    saveToStorage();
}

renderTodos();
buttonElement.onclick = addTodo;

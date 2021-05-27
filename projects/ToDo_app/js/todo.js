// ENTER KEY --> ADD
var input = document.getElementById('task');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('add').click();
    }
});

// TASK FUNCTION
// Get task from input
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
};

// Adds task to array
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
};

// Displays task permanently on screen
function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    
    // Displays task as list
    document.getElementById('todos').innerHTML = html;

    // Tells the browser how to display array after an item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
};

// Displays task when 'add' is clikced
document.getElementById('add').addEventListener('click', add);

show();

// Creates remove functionality
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
};
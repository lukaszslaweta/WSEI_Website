const TodoContainer = document.querySelectorAll('.todo_container')[0];
const TodoAdd = document.querySelectorAll('.todo_plus')[0];

TodoAdd.addEventListener('click', () => {
    TodoContainer.appendChild(genTodoItem());
});

function genTodoItem() {

    let element = document.createElement("div");
    element.className = "todo_item";
    let text = document.createElement("span");
    text.className = "todo_item_text";
    var input = window.prompt("Enter text: ");
    text.textContent = input;

    let controls = document.createElement('span');
    controls.className = 'todo_controls';
    let edit = document.createElement('img');
    edit.src = "./assets/icons/edit.svg";
    edit.onclick = () => (text.textContent = prompt('Edit: ', text.textContent));
    let remove = document.createElement('img');
    remove.src = "./assets/icons/correct.svg";
    remove.onclick = () => TodoContainer.removeChild(element);
    controls.appendChild(edit);
    controls.appendChild(remove);
    element.appendChild(text);
    element.appendChild(controls);
    return element;
}
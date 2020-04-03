const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const input = document.getElementById('input')
/**
 * In order to make this function work to create a new item in the list
 * fisrt, newLI receives the info and the it is converted into text node
 * and appended into newEntry that is a <li></li> which is appended into ul list
 */
function newTodo() {

  let newLI
  let newEntry

  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHtml++

  newLI = input.value
  newEntry = document.createElement('li')
  newEntry.appendChild(document.createTextNode(newLI))
  
  list.appendChild(newEntry)
  
}

function deleteTodo(){

}

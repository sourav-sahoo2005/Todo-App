const input = document.getElementById('input')
const plusicon = document.getElementById('plus')
const todos = document.getElementById('todos')
// const delete = document.getElementById('delete')
// const delete = document.getElementById('delete')

let image = './icon/cross.svg'

plusicon.addEventListener('click', () => {
    
    if (input.value === "") return;
    const x = document.createElement('div')
    x.className = 'y'
    x.innerHTML = `<div id="todo"><span>${input.value}</span> <div class="img">
                    <img src="./icon/tick.svg" alt="">
                    <img id="delete" class="delete-btn" src="./icon/cross.svg" alt="">
                </div></div>`
    todos.appendChild(x)
    input.value = ""

    const deleteBtn = y.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    y.remove();
  });
//thi si my to do app

    // const deleteTodo = y.getElementById('delete')
    // const todolist = document.getElementById('todo')
    // deleteTodo.addEventListener('click', () => {
    //     console.log('clicked')
    //     // todos.removeChild(todolist)
    //     y.remove()
    // })





})







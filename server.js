document.getElementById("plus").addEventListener("click", function () {
    const input = document.getElementById("input");
    const todoContainer = document.getElementById("todos");

    const value = input.value.trim();
    if (value === "") return;

    // Create todo item
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.innerHTML = `
    <span>${value}</span>
    <div class="actions">
      <img class="complete" src="./icon/tick.svg" alt="">
      <img id="delete" class="delete-btn" src="./icon/cross.svg" alt="">
    </div>
  `;

    // Add to container
    todoContainer.appendChild(todo);

    // Delete functionality
    const deleteBtn = todo.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        todo.remove();
    })
    const completeBtn = todo.querySelector('.complete');
    //    "img[alt='Complete']"
    completeBtn.addEventListener("click", () => {
        let actiondiv = todo.querySelector("div")

        actiondiv.innerText = "Completed"
        todo.style.backgroundColor = "rgb(244, 245, 186)"
        todo.querySelector('span').style.color=' rgb(3, 19, 236)'



    });


    // Clear input
    input.value = "";
});
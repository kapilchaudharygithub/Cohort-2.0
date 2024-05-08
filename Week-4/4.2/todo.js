const btn = document.getElementById("btn");
const task = document.getElementById("task");
const time = document.getElementById("time");
const todoItems = document.getElementById("todoItems");

function textCleaner(data) {
  const wordsArray = data.split(/\s+/).filter(Boolean);
  const cleanString = wordsArray.join(" ");
  return cleanString;
}

btn.addEventListener("click", () => {
  const tk = textCleaner(task.value);
  const tm = textCleaner(time.value);

  todoList.push({
    id: todoList.length,
    title: tk,
    description: tm,
  });

  renderTodoItems();
});

const todoList = [];

function renderTodoItems() {
  todoItems.innerHTML = "";

  todoList.forEach((item) => {
    const para = document.createElement("div");
    todoItems.appendChild(para);

    para.innerHTML = `
      <div>
        <p>${item.id}</p>
        <p>${item.title}</p>
        <p>${item.description}</p>
        <button class="done-btn" data-state="undone">Mark as Done</button>
      </div>
    `;

    const doneBtn = para.querySelector(".done-btn");
    doneBtn.addEventListener("click", () => {
      if (doneBtn.getAttribute("data-state") === "undone") {
        doneBtn.textContent = "Todo Done";
        doneBtn.setAttribute("data-state", "done");
      } else if (doneBtn.getAttribute("data-state") === "done") {
        doneBtn.textContent = "Delete Todo";
        doneBtn.setAttribute("data-state", "deleted");
      } else if (doneBtn.getAttribute("data-state") === "deleted") {
        item.id.pop();
        item.title.pop();
        item.description.pop();
        para.remove();
      }
    });
  });
}

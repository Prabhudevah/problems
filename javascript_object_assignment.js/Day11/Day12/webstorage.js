function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const list = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  const icons = document.createElement("div");
  icons.className = "icons";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.onclick = () => {
    list.removeChild(li);
  };

  icons.appendChild(editBtn);
  icons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(icons);
  list.appendChild(li);

  input.value = "";
}

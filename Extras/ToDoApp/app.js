const taskList = document.querySelector(".to-do-list")
const addTaskBtn = document.querySelector("#addTask")


addTaskBtn.addEventListener("click",() => {
    let task = document.createElement("li")
    taskList.appendChild(task)
    task.innerHTML = `<ion-icon name="add-outline"></ion-icon>
    <input type="text" id="taskInput">
    <ion-icon name="bookmark-outline" id="saveBtn"></ion-icon>`;
    addTaskBtn.disabled = true;
    addTaskBtn.classList.add("disabledBtn")
})


const saveBtns = document.querySelectorAll("#saveBtn")

for (saveBtn of saveBtns){
    saveBtn.addEventListener("click",()=>{
        let inputTask = document.getElementById("taskInput");
        let listItem = this.parentElement;
        listItem.innerHTML = `<ion-icon name="square-outline"></ion-icon><p>${inputTask.value}</p><ion-icon name="trash-outline"></ion-icon>`
    })
}


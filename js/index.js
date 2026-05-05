console.log("testing")
var inputTask= document.getElementById("inputTask")
var btnTask=document.getElementById("btnTask")
var taskList=document.getElementById("taskList")
console.log(taskList)

function addTask(){
    console.log("button clicked")
    const taskValue=inputTask.value.trim();
    console.log(taskValue)
    if(taskValue===""){
        alert("please enter a task")
        return;

    }
    const li=document.createElement("li")
    const leftSection=document.createElement("div")
    leftSection.classList.add("left-section")
    const checkBox=document.createElement("input")
    checkBox.type="checkbox"
    const editButton=document.createElement("button")
    editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    editButton.classList.add("edit-button")
    console.log(editButton)
    const span=document.createElement("span")
    span.textContent=taskValue
    const buttonContainer=document.createElement("div")
    buttonContainer.classList.add("task-button")
    buttonContainer.appendChild(editButton)
     editButton.addEventListener("click",function(){
        const updatedTask=prompt("edit you task",span.textContent)
        if(updatedTask!==null && updatedTask.trim()!==""){
            span.textContent=updatedTask.trim()
        }
    })
    const deleteButton=document.createElement("button")
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'
    deleteButton.classList.add("delete-button")
    buttonContainer.appendChild(deleteButton)
    deleteButton.addEventListener("click",function(){
        li.remove();

    })
    checkBox.addEventListener("change",function(){
        if(checkBox.checked){
            console.log("checked")
            span.style.textDecoration="line-through"
            span.style.opacity="0.6"
        }
        else{
            console.log("unchecked")
            span.style.textDecoration="none"
            span.style.opacity="1"
        }
    })
    leftSection.appendChild(checkBox)
    leftSection.appendChild(span)


    li.appendChild(leftSection)
    li.appendChild(buttonContainer)

   
    taskList.appendChild(li)
    inputTask.value="";
}
btnTask.addEventListener("click",addTask)
inputTask.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addTask();
    }
})

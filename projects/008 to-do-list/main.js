let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let deleteAll = document.querySelector(".deleteAll");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if There  is Tasks in Local Storage
if(localStorage.getItem("tasks"))
{
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Triger Get Data From Local Storage
getDataFromLocalStorage();

// Add Task
submit.onclick = function(){
    if (input.value !== "")
    {
        addTaskToArray(input.value); // Add Task To Array of Tasks
        input.value = ""; // Empty Input Field
    }
};

// Click On Task Element
tasksDiv.addEventListener('click',(e) => {
    // Delete button
    if(e.target.classList.contains("del"))
    {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));  //! To Delete Task From Local Storage
       e.target.parentElement.remove();  //? Remove Parent Of The Button Which Is The Li Tag That Contains The Text And The Buttons
    }
    // Task Element
    if(e.target.classList.contains("task"))
    {
        // Toggle Completed For The Task
        toggleStatusTaskWith(e.target.getAttribute("data-id"));
        // Toggle Done Class
        e.target.classList.toggle( "done" );

    }
})

function addTaskToArray(taskText)
{
    // Task Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    // Push Task To Array  Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page 
    addElementsToPageFrom(arrayOfTasks);
    // Add Tasks To Local Storage
    addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks)
{
// Empty Tasks Div
tasksDiv.innerHTML  = "";
// Looping On Array Of Tasks
arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task Is Done
    if (task.completed == true)
    {
        div.className = "task done";
    }
    div.setAttribute('data-id', task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);

    
}); 
}

function addDataToLocalStorageFrom(arrayOfTasks)
{
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage ()
{
    let data = window.localStorage.getItem("tasks");
    if(data)
    {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId)
{
    // for ( let i = 0 ; i < arrayOfTasks.length ; i++)
    // {
    //     console.log(`${arrayOfTasks[i].id} === ${taskId}`)
    // }

    arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId)
{
  for ( let i = 0 ; i < arrayOfTasks.length ; i++)
    {
      if(arrayOfTasks[i].id == taskId)
      {
        arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true ): (arrayOfTasks[i].completed = false );
      }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}

deleteAll.onclick =  function()
{

    // Confirmation  before deleting all tasks
    const confirmation = window.confirm('Are you sure you want to delete all inserted Tasks?');
   
    if(confirmation)
    {
    window.localStorage.removeItem('tasks');
    tasksDiv.innerHTML = '';
    arrayOfTasks = [];
    }
    else
    {return;}
};
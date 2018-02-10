function addTask() {

// capture the value of the input field that will be our task name
    var taskName = document.getElementById('task').value; 
// create a new list element ('li'): ELEMENT_NODE
    var list = document.createElement('li'); 
// create the TEXT_NODE that will store the task text
    var task = document.createTextNode(taskName); 
// append the TEXT_NODE to the list 
    list.appendChild(task); 
// get the list of the tasks of the page
    var taskList = document.getElementsByClassName('taskList')[0]; 
// append the new task to the list
    taskList.appendChild(list); 
// clear the input field after submit
    document.getElementById('task').value = ''; 

} 


function deleteAllTasks() {
    // get all tasks from the HTML
    var list = document.querySelector('.taskList'); 
    // clear it
    list.innerHTML = ''; 

} 

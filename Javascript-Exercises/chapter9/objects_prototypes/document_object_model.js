function addTask() {

    var taskName = document.getElementById('task').value; 

    var list = document.createElement('li'); 

    var task = document.createTextNode(taskName); 

        list.appendChild(task); 


    var taskList = document.getElementsByClassName('taskList')[0]; 

        taskList.appendChild(list); 


        document.getElementById('task').value = ''; 

} 


function deleteAllTasks() {

    var list = document.querySelector('.taskList'); 

        list.innerHTML = ''; 
} 


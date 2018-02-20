// Suppose you have an app that maintains an array of your tasks for the day. Each task is an object, each with a name and duration property 

var tasks = [
    {
        'name'          :'Write for Apokueo', 
        'duration'      : 120
    }, 

    {
        'name' : 'Work out', 
        'duration': 60
    }, 

    {
        'name'  : 'Procrastinate on Duolingo', 
        'duration' : 240
    } 

]; 

var task_names = [], i = 0; 

// for loop
for ( i, max = tasks.length; i < max; i += 1 ) {

    task_names.push(tasks[i].name); 
    console.log(task_names); 
} 

// forEach loop 
var task_names = [];
tasks.forEach(function(task) { 
    task_names.push(task.name); 
}); 

// map 
var task_names = tasks.map(function(task, index, array) { 
    return task.name; 
}); 

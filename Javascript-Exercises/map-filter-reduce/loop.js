var i = 0; var array = [1, 2, 3, 4, 5, 6]; 

models = []; 

for (i; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]); 
        console.log(i)
    } 
} 

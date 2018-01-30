// recursion is a function within a function calling itself

const g = function f(stop) {
  if(stop) console.log('f stopped');
  f(true);
};

g(false); 

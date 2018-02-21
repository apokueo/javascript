var numbers = [1,2,3], doubledNumbers = [], i = 0;

for (; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}


var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;

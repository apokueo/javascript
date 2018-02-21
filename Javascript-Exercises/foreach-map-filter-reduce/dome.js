var numbers = [1,2,3],
    sum = 0, number;

function addShit(number) {
  sum += 1
  console.log(number)
}
addShit();
numbers.forEach(addShit)

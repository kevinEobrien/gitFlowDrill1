const numbers = [34, 56, 78, 90, -9, 1, 3];

function sum(numbersArray) {
  let total = numbersArray.reduce((sum, number) => {
    return (sum += number);
  });
  return total;
}

sum(numbers);

const isDate = function (input) {
  // Write your code here

  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.

const input = prompt("Enter Date.");
alert(isDate(input));

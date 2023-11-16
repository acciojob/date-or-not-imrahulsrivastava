var isDate = function (input) {
  //   write your code here

  if (input instanceof Date) {
    return true;
  }

  if (typeof input === "string") {
    var date = new Date(input);
    return !isNaN(date.getTime());
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

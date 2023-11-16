var isDate = function (input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  } else if (typeof input === "string") {
    var date = new Date(input);
    return (
      !isNaN(date.getTime()) &&
      date.toISOString().slice(0, 10) === input.slice(0, 10)
    );
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

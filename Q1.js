// let numberOfStars = prompt(
//   "Enter the numbers of asterisk you want to render first:  "
// );

const starPattern = (number) => {
  let pattern = "";
  for (a = 1; a <= number; a++) {
    for (b = 1; b <= number + 1 - a; b++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
};
console.log(starPattern(5));

const answer4 = document.getElementById("answer4");
const questionNo4 = document.querySelector("#q4");

let numbers = [1, 2, 3, 4];

const transformFunc = (numbers, n) => {
  const result = numbers.map((num) => num * n);

  return result;
};

const numResult = transformFunc(numbers, 6);

questionNo4.addEventListener("click", (e) => {
  const numResult = transformFunc(numbers, 6);
  const answer = document.createDocumentFragment();

  const numberElement = document.createElement("div");

  numberElement.textContent = `${numResult}`;
  answer.appendChild(numberElement);

  answer4.appendChild(answer);
});

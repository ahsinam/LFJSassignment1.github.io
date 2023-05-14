const answerOf5 = document.getElementById("answer5");
const questionNo5 = document.querySelector("#q5");
var arr = [
  {
    id: 1,
    name_: "John",
  },
  {
    id: 2,
    name_: "Mary",
  },
  {
    id: 3,
    name_: "Andrew",
  },
];

const sortedArray = (arr, key) => {
  const result = [...arr].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
  return result;
};

questionNo5.addEventListener("click", (e) => {
  const sortResult = sortedArray(arr, "name_");
  console.log(sortResult);
  const answer = document.createDocumentFragment();

  const objectElement1 = document.createElement("li");
  objectElement1.textContent = `{id: ${sortResult[0].id}, name: ${sortResult[0].name_}}`;

  const objectElement2 = document.createElement("li");
  objectElement2.textContent = `{id: ${sortResult[1].id}, name: ${sortResult[1].name_}}`;

  const objectElement3 = document.createElement("li");
  objectElement3.textContent = `{id: ${sortResult[2].id}, name: ${sortResult[2].name_}}`;

  answer.appendChild(objectElement1);
  answer.appendChild(objectElement2);
  answer.appendChild(objectElement3);

  answerOf5.appendChild(answer);
});


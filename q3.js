/**
 Write a function that searches for an object by a specific key value in an array of objects:
var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

searchByName(fruits, 'apple');
Should return: {id: 2, name: 'Apple', color: 'Red'}

Also try searchByKey(fruits, 'name', 'apple');
 */

const answerOf3 = document.getElementById("answer3");
const questionNo3 = document.querySelector("#q3");

const answerof3b = document.getElementById("answer3b");
const questionNo3b = document.querySelector("#q3b");

var fruitsObj = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

const searchByName = (fruits, name) => {
  const result = fruits.find((fruit) => {
    return fruit.name == name;
  });

  return result;
};

const searchByKey = (fruits, key, value) => {
  const result = fruits.find((fruit) => {
    return fruit[key] == value;
  });
  return result;
};

questionNo3.addEventListener("click", (e) => {
  const fruitResult = searchByName(fruitsObj, "Apple");
  const answers = document.createDocumentFragment();

  const idElement = document.createElement("li");
  idElement.textContent = `id: ${fruitResult.id}`;
  const nameElement = document.createElement("li");
  nameElement.textContent = `name: ${fruitResult.name}`;

  const colorElement = document.createElement("li");
  colorElement.textContent = `color: ${fruitResult.color}`;

  answers.appendChild(idElement);
  answers.appendChild(nameElement);
  answers.appendChild(colorElement);

  answerOf3.appendChild(answers);
});

questionNo3b.addEventListener("click", (e) => {
  const fruitResult = searchByKey(fruitsObj, "name", "Apple");
  const answers = document.createDocumentFragment();

  const idElement = document.createElement("li");
  idElement.textContent = `id : ${fruitResult.id}`;

  const nameElement = document.createElement("li");
  nameElement.textContent = `name : ${fruitResult.name}`;

  const colorElement = document.createElement("li");
  colorElement.textContent = `color : ${fruitResult.color}`;

  answers.appendChild(idElement);
  answers.appendChild(nameElement);
  answers.appendChild(colorElement);

  answerof3b.appendChild(answers);
});
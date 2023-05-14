const answerOf6 = document.getElementById("answer6");
const question6 = document.querySelector("#q6");

var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

function normalize(objs = []) {
  let _obj = {};
  objs.forEach((obj) => {
    if (!obj.children || !obj.children.length) {
      _obj[`${obj.id}`] = obj;
    } else {
      const childrenObjs = normalize(obj.children);
      obj.children = obj.children.map((item) => item.id);
      _obj = { ..._obj, [`${obj.id}`]: obj, ...childrenObjs };
    }
  });
  return _obj;
}

const objValues = Object.values(input);
const output = normalize(objValues);

console.log(output);

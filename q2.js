/* 
1. Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
2. Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
Name: ABC School of Schoolery, Date: 2000
Name: BCD School of Trickery, Date: 2006
 */

const answerOf2 = document.getElementById("answer2");
const questionNo2 = document.querySelector("#q2");

const myIntro = {
  name: "Manisha KC",
  address: "Kaushaltar",
  email: "kahsinam@gmail.com",
  interests: "Mobile Games",
  education: [
    { name: "Tamakoshi EBS", year: "2003" },
    { name: "Omega Int'l College", year: "2016" },
    { name: "Kathmandu University", year: "2018" },
  ],
};

const educationList = () => {
  let result = myIntro.education;
  return result;
};

questionNo2.addEventListener("click", (e) => {
  const educationResult = educationList();
  const answer = document.createDocumentFragment();
  console.log(educationResult);

  const schoolElement = document.createElement("li");
  schoolElement.textContent = `name: ${educationResult[0].name},  year: ${educationResult[0].year}`;

  const highSchoolElement = document.createElement("li");
  highSchoolElement.textContent = `name: ${educationResult[1].name},  year: ${educationResult[1].year}`;

  const universityElement = document.createElement("li");
  universityElement.textContent = `name: ${educationResult[2].name},  year: ${educationResult[2].year}`;

  answer.appendChild(schoolElement);
  answer.appendChild(highSchoolElement);
  answer.appendChild(universityElement);

  answerOf2.appendChild(answer);
});

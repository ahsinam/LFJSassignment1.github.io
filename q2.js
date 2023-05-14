/* 
1. Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
2. Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
Name: ABC School of Schoolery, Date: 2000
Name: BCD School of Trickery, Date: 2006
 */

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

myIntro.education.forEach((value) => console.log(value));

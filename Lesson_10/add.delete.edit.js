const student = {
  id: 1,
  programmingLang: "JavaScript",
  hasExperienceInReact: false,
};

const student2 = Object({key: 'value'}); 
console.log("student2", student2);

// Add
student.people = 6;
student.experience = 6;

console.log("student", student);

// Delete

delete student.hasExperienceInReact;

console.log("student", student);

// Edit

student.experience = 12;
console.log("student", student);

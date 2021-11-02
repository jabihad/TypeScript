const object =                       // This object can be json reponse from backend
    {
       studentName: "Kamal",
       age: 45 
    };

const { studentName, age} = object;  // studentName, age must exist in object. Otherwise will give error
console.log(studentName, age);

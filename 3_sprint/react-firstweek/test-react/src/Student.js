import React from "react";

/* function just works like a normal JS function, 
it gets data passed from somewhere that it receives in the parameter
in this case the data gets send from Phoenixes.js by calling the function Student
 */
function Student(parameter) {
  // console.log("parameter :>> ", parameter);
  const studentName = parameter.phoenix;
  const projectName = parameter.projectName;

  //   console.log("studentName :>> ", studentName);

  return (
    <div>
      I am the Phoenix: {studentName} studying {projectName}
    </div>
  );
}

/* // the same with destructuring. works when data is always called the same
function Student({ phoenix, projectName }) {
  return (
    <div>
      <h3>I am a Phoenix: {phoenix}</h3>
      <p>I work on {projectName}</p>
    </div>
  );
} */

export default Student;

import { useState } from "react";

const AddNewStudent = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [averageGrade, setAverageGrade] = useState(0);
  const submit = (event) => {
    event.preventDefault();
    const newStudent = { name, age, major, university, averageGrade };
    console.log(newStudent);
    props.handleAddStudent(newStudent);
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name.."
        />
        <label>Age: </label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Student Age.."
        />
        <label>Major: </label>
        <input
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Student Major.."
        />
        <label>University: </label>
        <input
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="Student University.."
        />
        <label>Average Grade: </label>
        <input
          value={averageGrade}
          onChange={(e) => setAverageGrade(e.target.value)}
          placeholder="Student Average Grade.."
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddNewStudent;

import { useState } from "react";
import Button from "./Button";

const emptyStudent = {
  name: "",
  age: 0,
  major: "",
  university: "",
  averageGrade: 0,
};
const AddStudent = ({ handleAddStudent }) => {
  const [newStudent, setNewStudent] = useState(emptyStudent);

  const submit = (event) => {
    event.preventDefault();
    const { name, age, major, university, averageGrade } = newStudent;
    if (!name || age <= 0 || !major || !university || averageGrade <= 0) return;

    handleAddStudent(newStudent);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [name]: value });
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          value={newStudent.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Student Name.."
        />
        <label htmlFor="age">Age: </label>
        <input
          value={newStudent.age}
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          placeholder="Student Age.."
        />
        <label htmlFor="major">Major: </label>
        <input
          value={newStudent.major}
          type="text"
          id="major"
          name="major"
          onChange={handleChange}
          placeholder="Student Major.."
        />
        <label htmlFor="university">University: </label>
        <input
          value={newStudent.university}
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          placeholder="Student University.."
        />
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          value={newStudent.averageGrade}
          type="number"
          id="averageGrade"
          name="averageGrade"
          onChange={handleChange}
          placeholder="Student Average Grade.."
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default AddStudent;

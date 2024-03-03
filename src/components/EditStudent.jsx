import { useState } from "react";
import Button from "./Button";

const EditStudent = ({ handleChangedStudent, selectedStudent }) => {
  const [editStudent, setEditStudent] = useState(selectedStudent);

  const submit = (event) => {
    event.preventDefault();
    const { name, age, major, university, averageGrade } = editStudent;
    if (!name || age <= 0 || !major || !university || averageGrade <= 0) return;
    handleChangedStudent(editStudent);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditStudent({ ...editStudent, [name]: value });
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          value={editStudent.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Student Name.."
        />
        <label htmlFor="age">Age: </label>
        <input
          value={editStudent.age}
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          placeholder="Student Age.."
        />
        <label htmlFor="major">Major: </label>
        <input
          value={editStudent.major}
          type="text"
          id="major"
          name="major"
          onChange={handleChange}
          placeholder="Student Major.."
        />
        <label htmlFor="university">University: </label>
        <input
          value={editStudent.university}
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          placeholder="Student University.."
        />
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          value={editStudent.averageGrade}
          type="number"
          id="averageGrade"
          name="averageGrade"
          onChange={handleChange}
          placeholder="Student Average Grade.."
        />
        <Button>Save Changes</Button>
      </form>
    </>
  );
};

export default EditStudent;

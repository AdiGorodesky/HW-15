import Button from "./Button";

const AddStudent = ({ handleAddOrEdit, changedStudent, setChangedStudent }) => {
  const submit = (event) => {
    event.preventDefault();
    const { name, age, major, university, averageGrade } = changedStudent;
    if (!name || age <= 0 || !major || !university || averageGrade <= 0) return;

    handleAddOrEdit(changedStudent);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangedStudent({ ...changedStudent, [name]: value });
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          value={changedStudent.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Student Name.."
        />
        <label htmlFor="age">Age: </label>
        <input
          value={changedStudent.age}
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          placeholder="Student Age.."
        />
        <label htmlFor="major">Major: </label>
        <input
          value={changedStudent.major}
          type="text"
          id="major"
          name="major"
          onChange={handleChange}
          placeholder="Student Major.."
        />
        <label htmlFor="university">University: </label>
        <input
          value={changedStudent.university}
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          placeholder="Student University.."
        />
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          value={changedStudent.averageGrade}
          type="number"
          id="averageGrade"
          name="averageGrade"
          onChange={handleChange}
          placeholder="Student Average Grade.."
        />
        <Button>{changedStudent.id ? "Save Changes" : "Submit"}</Button>
      </form>
    </>
  );
};

export default AddStudent;

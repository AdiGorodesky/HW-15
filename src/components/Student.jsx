import Button from "./Button";

const Student = ({ student, removeStudent, handleEdit }) => {
  const className = student.id % 2 === 0 ? "even-row" : "odd-row";

  return (
    <tr className={className}>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td>
        <Button
          onClick={() => removeStudent(student.id)}
          className="remove-btn"
        >
          Remove
        </Button>
        <Button onClick={() => handleEdit(student.id)} className="edit-btn">
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default Student;

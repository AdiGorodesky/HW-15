import Student from "./Student";

const Dashboard = ({ students, removeStudent, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
            removeStudent={removeStudent}
            handleEdit={handleEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Dashboard;

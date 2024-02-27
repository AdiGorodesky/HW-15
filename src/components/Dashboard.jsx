import students from "../data/students";

const Dashboard = (props) => {
  return (
    <table>
      <tbody key={props.students[0].id}>
        {/* why did line 6 had to have a key and why did it only worked writing the above */}
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average Grade</th>
        </tr>
        {props.students.map((student) => {
          const className = student.id % 2 === 0 ? "even-row" : "odd-row";
          return (
            <tr key={student.id} className={className}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.major}</td>
              <td>{student.university}</td>
              <td>{student.averageGrade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Dashboard;

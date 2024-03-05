import initialStudents from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { useState } from "react";
import { utilService } from "../services/utilService";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import { userService } from "../services/userService";

const emptyStudent = {
  name: "",
  age: 0,
  major: "",
  university: "",
  averageGrade: 0,
};

const App = () => {
  // const studentsTry = userService
  //   .getStudentAsync()
  //   .then((res) => {
  //     console.log(res);
  //     setStudents(res);
  //   })
  //   .catch((err) => console.log(err));
  // console.log(studentsTry);
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState({});
  const initialStudent = selectedStudent.id ? selectedStudent : emptyStudent;

  const [changedStudent, setChangedStudent] = useState(initialStudent);

  const handleAddStudent = (newStudent) => {
    newStudent = {
      id: utilService.generateId(),
      name: newStudent.name,
      age: newStudent.age,
      major: newStudent.major,
      university: newStudent.university,
      averageGrade: newStudent.averageGrade,
    };

    setStudents([...students, newStudent]);
  };

  const removeStudent = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };

  const handleEdit = (studentId) => {
    const selectedStudent = students.find(
      (student) => studentId === student.id
    );

    setSelectedStudent(selectedStudent);
    setChangedStudent(selectedStudent);
  };

  const handleChangedStudent = (changedStudent) => {
    const changedStudents = students.map((student) => {
      const updatedStudent =
        student.id === changedStudent.id
          ? Object.assign(student, changedStudent)
          : student;
      return updatedStudent;
    });

    setStudents(changedStudents);
  };

  const handleAddOrEdit = (student) => {
    if (student.id) {
      handleChangedStudent(student);
    } else {
      handleAddStudent(student);
    }
  };

  return (
    <main>
      <Header />
      <h1>Student List</h1>
      <AddStudent
        userToUpdate={selectedStudent}
        handleAddOrEdit={handleAddOrEdit}
        changedStudent={changedStudent}
        setChangedStudent={setChangedStudent}
      />

      <Dashboard
        students={students}
        removeStudent={removeStudent}
        handleEdit={handleEdit}
      />
      <Footer />
    </main>
  );
};

export default App;

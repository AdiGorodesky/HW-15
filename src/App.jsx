import initialStudents from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { useState } from "react";
import { utilService } from "../services/utilService";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

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
    const selectedStudent = students.filter(
      (student) => studentId === student.id
    );
    setIsEdit(true);
    setSelectedStudent(selectedStudent[0]);
    // how to tranfer only an obj without the arr
  };

  const handleChangedStudent = (changedStudent) => {
    const changedStudents = students.map((student) => {
      student.id === changedStudent.id
        ? Object.assign(student, changedStudent)
        : student;
    });
    console.log(changedStudents);

    // setStudents(changedStudents);
    setIsEdit(false);
  };

  return (
    <main>
      <Header />
      <h1>Student List</h1>
      {isEdit ? (
        <EditStudent
          handleChangedStudent={handleChangedStudent}
          selectedStudent={selectedStudent}
        />
      ) : (
        <AddStudent handleAddStudent={handleAddStudent} />
      )}

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

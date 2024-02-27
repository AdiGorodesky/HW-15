import initialStudents from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AddNewStudent from "./components/addStudent";
import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [id, setId] = useState(initialStudents.length);

  const handleAddStudent = (newStudent) => {
    newStudent = {
      id: setId((prev) => prev++),
      name: newStudent.name,
      age: newStudent.age,
      major: newStudent.major,
      university: newStudent.university,
      averageGrade: newStudent.averageGrade,
    };

    setStudents([...students, newStudent]);
  };

  return (
    <main>
      <Header />
      <h1>Student List</h1>
      <AddNewStudent handleAddStudent={handleAddStudent} />
      <Dashboard students={students} />
      <Footer />
    </main>
  );
};

export default App;

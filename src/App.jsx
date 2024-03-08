import initialStudents from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { utilService } from "../services/utilService";
import AddOrEdit from "./components/AddOrEdit";
import Login from "./components/Login";
import Register from "./components/Register";
import { userService } from "../services/userService";
import { storageService } from "../services/storageService";

const emptyStudent = {
  name: "",
  age: 0,
  major: "",
  university: "",
  averageGrade: 0,
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const initialStudent = selectedStudent.id ? selectedStudent : emptyStudent;

  const [changedStudent, setChangedStudent] = useState(initialStudent);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(null);
  const [alertMsg, setAlertMsg] = useState(null);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const loadStudents = async () => {
      const data = await userService.getStudentAsync();
      setStudents(data);
    };
    loadStudents();
  }, []);

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

  const handleAuth = (username, password, isRegister = false, email) => {
    if (isRegister) {
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      const user = userService.login(username, password);
      if (!user) {
        setAlertMsg("Invalid credentials");
      }
      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  return (
    <main>
      <Header handleLogout={handleLogout} loggedInUser={loggedInUser} />
      {!loggedInUser ? (
        showRegister ? (
          <Register handleAuth={handleAuth} setShowRegister={setShowRegister} />
        ) : (
          <Login
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
            alertMsg={alertMsg}
          />
        )
      ) : (
        <>
          <h1>Student List</h1>
          <AddOrEdit
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
        </>
      )}

      <Footer />
    </main>
  );
};

export default App;

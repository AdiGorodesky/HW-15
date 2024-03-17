import React, { useEffect, useState } from "react";
import Student from "../components/Student";
import AddOrEdit from "../components/AddOrEdit";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";

const emptyStudent = {
  name: "",
  age: 0,
  major: "",
  university: "",
  averageGrade: 0,
};

const StudentsPage = () => {
  const [students, setStudents] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState({});
  const initialStudent = selectedStudent.id ? selectedStudent : emptyStudent;
  const [changedStudent, setChangedStudent] = useState(initialStudent);

  const { user } = useUser();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    const loadStudents = async () => {
      const loadedStudents = await userService.getStudentAsync();
      console.log(loadedStudents);
      setStudents(loadedStudents);
    };

    loadStudents();
  }, []);

  console.log(students);
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
    <>
      <AddOrEdit
        handleAddOrEdit={handleAddOrEdit}
        changedStudent={changedStudent}
        setChangedStudent={setChangedStudent}
      />
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
    </>
  );
};

export default StudentsPage;

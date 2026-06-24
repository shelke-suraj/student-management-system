import React, { useState } from "react";
import api from "../api";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = async () => {
    try {
      await api.post("/students", student);
      alert("Student Added Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="Course"
        onChange={handleChange}
      />

      <input
        name="marks"
        placeholder="Marks"
        onChange={handleChange}
      />

      <button onClick={addStudent}>
        Add Student
      </button>
    </div>
  );
}

export default AddStudent;